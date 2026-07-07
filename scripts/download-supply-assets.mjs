import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/marketing/supply");

const ASSETS = {
  "hero-phone.png": "https://www.figma.com/api/mcp/asset/0873135d-389c-496e-b6d0-023a5f5d0a20",
  "hero-sparkle.svg": "https://www.figma.com/api/mcp/asset/d2af683b-7fcc-41af-8b9e-a1c952442e9b",
  "stat-plus.svg": "https://www.figma.com/api/mcp/asset/f9ad1719-c68a-4c5f-9bac-cbead6e9971e",
  "check-icon.svg": "https://www.figma.com/api/mcp/asset/14d5fa7a-3e6b-4efb-9c17-f3587752f762",
  "capability-card.png": "https://www.figma.com/api/mcp/asset/e5fed07b-76ce-4d39-9b00-2f83ba4e751b",
  "form-sparkle.svg": "https://www.figma.com/api/mcp/asset/c9ed230f-5958-4be6-83aa-d015c3d46d71",
  "req-compliance.svg": "https://www.figma.com/api/mcp/asset/a73313aa-7652-42bd-9ef7-9a89fd442439",
  "req-capacity.svg": "https://www.figma.com/api/mcp/asset/38738e33-05ae-497c-8fd1-4f2fb516e90d",
  "req-product.svg": "https://www.figma.com/api/mcp/asset/2f171b19-498d-4534-a63e-67e600d6513f",
};

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  let ok = 0;
  for (const [filename, url] of Object.entries(ASSETS)) {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`✗ ${filename}: HTTP ${res.status}`);
      continue;
    }
    await fs.writeFile(path.join(OUT_DIR, filename), Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${filename}`);
    ok += 1;
  }
  console.log(`\nDownloaded ${ok}/${Object.keys(ASSETS).length} assets`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
