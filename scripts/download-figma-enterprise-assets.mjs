/**
 * Export PNG assets from the B2B Marketing Page Figma file (node 150:6211).
 *
 * Requires a Figma personal access token:
 *   https://www.figma.com/developers/api#access-tokens
 *
 * Usage:
 *   FIGMA_ACCESS_TOKEN=xxx npm run figma:assets
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE_KEY = "fhehnIFLpZxfU0Bg9blO45";
const OUT_DIR = path.join(__dirname, "../public/marketing/enterprise");
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;

/** Figma node id → output filename (from frame 150:6211). */
const NODES = {
  "hero-portrait": "150:6239",
  "hero-union-blob": "150:6224",
  "hero-underline": "150:6217",
  "hero-sparkline": "150:6229",
  "hero-monthly-badge": "150:6240",
  "hero-sparkle-yellow": "150:6248",
  "hero-sparkle-green": "150:6247",
  "hero-sparkle-purple": "150:6249",
  "stat-plus": "150:6295",
  "logo-veterans-united": "150:6409",
  "logo-morty": "150:6411",
  "logo-tomo": "150:6414",
  "logo-cooper": "150:6416",
  "ethos-petal-blob": "150:6400",
  "ethos-arrow": "150:6417",
  "ethos-arrow-scribble": "150:6421",
  "ethos-check": "150:6388",
  "nav-logo": "143:3929",
  "footer-house": "168:12772",
};

async function main() {
  if (!TOKEN) {
    console.error(
      "Missing FIGMA_ACCESS_TOKEN.\n" +
        "Create a token at https://www.figma.com/developers/api#access-tokens\n" +
        "Then run: FIGMA_ACCESS_TOKEN=xxx npm run figma:assets"
    );
    process.exit(1);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  const nodeIds = Object.values(NODES).join(",");
  const imageRes = await fetch(
    `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(nodeIds)}&format=png&scale=2`,
    { headers: { "X-Figma-Token": TOKEN } }
  );

  if (!imageRes.ok) {
    console.error("Figma Images API error:", imageRes.status, await imageRes.text());
    process.exit(1);
  }

  const { images, err } = await imageRes.json();
  if (err) {
    console.error("Figma API:", err);
    process.exit(1);
  }

  const idToFile = Object.fromEntries(
    Object.entries(NODES).map(([file, id]) => [id, `${file}.png`])
  );

  let downloaded = 0;
  for (const [nodeId, url] of Object.entries(images)) {
    if (!url) {
      console.warn(`No export URL for node ${nodeId}`);
      continue;
    }
    const filename = idToFile[nodeId];
    const outPath = path.join(OUT_DIR, filename);
    const pngRes = await fetch(url);
    if (!pngRes.ok) {
      console.warn(`Failed to download ${filename}:`, pngRes.status);
      continue;
    }
    await fs.writeFile(outPath, Buffer.from(await pngRes.arrayBuffer()));
    console.log("✓", filename);
    downloaded += 1;
  }

  console.log(`\nDownloaded ${downloaded}/${Object.keys(NODES).length} assets to public/marketing/enterprise/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
