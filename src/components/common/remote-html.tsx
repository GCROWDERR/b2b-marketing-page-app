import { useEffect, useRef, useState } from "react";

import { finalizeMarketingSiteNav } from "./site-nav-normalize";

type RemoteHtmlProps = {
  url: string;
  className?: string;
  /** When true, apply marketing-shell nav normalization after Alpine init. */
  normalizeNav?: boolean;
};

declare global {
  interface Window {
    Alpine?: {
      start: () => void;
      initTree: (el: Element) => void;
    };
  }
}

const loadedStylesheets = new Set<string>();
const loadedScripts = new Set<string>();
const htmlCache = new Map<string, string>();
let alpineStarted = false;

const MARKETING_NAV_LATE_CSS = "/marketing/site-nav-late-overrides.css";

function injectMarketingNavLateOverrides() {
  const id = "marketing-site-nav-late-overrides";
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = MARKETING_NAV_LATE_CSS;
  document.head.appendChild(link);
}

function appendStylesheet(href: string, onLoad?: () => void) {
  if (
    loadedStylesheets.has(href) ||
    document.querySelector(`link[rel="stylesheet"][href="${href}"]`)
  ) {
    onLoad?.();
    return;
  }
  loadedStylesheets.add(href);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  if (onLoad) {
    link.onload = () => onLoad();
    link.onerror = () => onLoad();
  }
  document.head.appendChild(link);
}

function loadScriptElement(script: HTMLScriptElement): Promise<void> {
  const src = script.getAttribute("src");

  if (src) {
    if (loadedScripts.has(src)) {
      return Promise.resolve();
    }
    loadedScripts.add(src);

    return new Promise((resolve, reject) => {
      const next = document.createElement("script");
      [...script.attributes].forEach((attr) => {
        next.setAttribute(attr.name, attr.value);
      });
      next.onload = () => resolve();
      next.onerror = () => reject(new Error(`Script failed: ${src}`));
      document.head.appendChild(next);
    });
  }

  const next = document.createElement("script");
  [...script.attributes].forEach((attr) => {
    next.setAttribute(attr.name, attr.value);
  });
  next.textContent = script.textContent;
  document.head.appendChild(next);
  return Promise.resolve();
}

async function waitForAlpine(maxAttempts = 100) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (window.Alpine) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

async function initializeAlpine(container: HTMLElement) {
  await waitForAlpine();
  if (!window.Alpine) return;

  if (!alpineStarted) {
    window.Alpine.start();
    alpineStarted = true;
  }

  window.Alpine.initTree(container);
}

async function injectRemoteHtml(
  container: HTMLElement,
  html: string,
  normalizeNav: boolean
): Promise<(() => void) | undefined> {
  const template = document.createElement("template");
  template.innerHTML = html;

  template.content.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const isNavStylesheet = href.includes("footer-navigation");
    appendStylesheet(href, isNavStylesheet && normalizeNav ? injectMarketingNavLateOverrides : undefined);
  });

  const scripts = [...template.content.querySelectorAll("script")];
  template.content.querySelectorAll("link, script").forEach((node) => node.remove());

  container.replaceChildren(
    ...[...template.content.childNodes].map((node) => node.cloneNode(true))
  );

  for (const script of scripts) {
    await loadScriptElement(script as HTMLScriptElement);
  }

  await initializeAlpine(container);

  if (normalizeNav) {
    injectMarketingNavLateOverrides();
    return finalizeMarketingSiteNav(container);
  }

  return undefined;
}

/** Client-side fetch + inject for Bankrate ESI includes (header/footer). */
export function RemoteHtml({ url, className, normalizeNav = false }: RemoteHtmlProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const loadGenerationRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const generation = ++loadGenerationRef.current;
    let cancelled = false;
    let cleanupNav: (() => void) | undefined;
    const abortController = new AbortController();

    async function load() {
      try {
        let html = htmlCache.get(url);

        if (!html) {
          const response = await fetch(url, {
            cache: "no-store",
            signal: abortController.signal,
          });
          if (!response.ok) {
            throw new Error(`Remote HTML failed: ${response.status}`);
          }
          html = await response.text();
          htmlCache.set(url, html);
        }

        if (cancelled || generation !== loadGenerationRef.current || !containerRef.current) {
          return;
        }
        cleanupNav = await injectRemoteHtml(containerRef.current, html, normalizeNav);
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") {
          return;
        }
        if (!cancelled) setError(true);
      }
    }

    void load();

    return () => {
      cancelled = true;
      abortController.abort();
      cleanupNav?.();
    };
  }, [url, normalizeNav]);

  if (error) {
    return <div className={className} aria-hidden />;
  }

  return <div ref={containerRef} className={className} suppressHydrationWarning />;
}
