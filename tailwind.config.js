/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  /* Ensure marketing tokens exist in Vite dev (JIT occasionally skipped nested surface.* utilities). */
  safelist: [
    "bg-gradient-to-b",
    "from-editorial-from",
    "to-editorial-to",
    "bg-surface-inverse",
    "bg-surface-inverse-input",
    "bg-surface-inverse-border",
    "border-surface-inverse-border",
    "text-surface-inverse-fg",
    "text-surface-inverse-fg-soft",
    "text-surface-inverse-fg/90",
    "hover:bg-surface-inverse-fg/10",
    "bg-tone-positive",
    "bg-tone-positive-muted",
    "bg-tone-positive-strong",
    "text-tone-positive-strong",
    "bg-tone-warn",
    "bg-tone-purple",
    "bg-feature-soft",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
        heading: ['"Playfair Display"', "Georgia", "serif"],
      },
      colors: {
        /* Legacy Bankrate names → same CSS vars as Shadcn semantics (single source of truth) */
        cream: "var(--background)",
        navy: {
          400: "var(--surface-inverse-border)",
          600: "var(--surface-inverse-border)",
          /* Same as body text on cream in light; panel fill on inverse in both themes */
          700: "var(--surface-inverse-input)",
          800: "var(--surface-inverse)",
        },
        brand: {
          blue: "var(--primary)",
          "blue-50": "var(--muted)",
          green: "var(--tone-positive)",
          "green-100": "var(--tone-positive-muted)",
          "green-700": "var(--tone-positive-strong)",
          yellow: "var(--tone-warn)",
          purple: "var(--tone-purple)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        /* Flat keys → same utilities as nested surface.inverse (more reliable in JIT) */
        "surface-inverse": "var(--surface-inverse)",
        "surface-inverse-fg": "var(--surface-inverse-foreground)",
        "surface-inverse-fg-soft": "var(--surface-inverse-foreground-soft)",
        "surface-inverse-border": "var(--surface-inverse-border)",
        "surface-inverse-input": "var(--surface-inverse-input)",
        tone: {
          positive: "var(--tone-positive)",
          "positive-strong": "var(--tone-positive-strong)",
          "positive-muted": "var(--tone-positive-muted)",
          warn: "var(--tone-warn)",
          purple: "var(--tone-purple)",
        },
        feature: {
          soft: "var(--feature-soft-blue)",
        },
        editorial: {
          from: "var(--gradient-editorial-from)",
          to: "var(--gradient-editorial-to)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "button-sm": "var(--button-radius-sm)",
        "button-lg": "var(--button-radius-lg)",
        "2.5xl": "1.25rem",
        "3.5xl": "2.125rem",
      },
    },
  },
  plugins: [],
};
