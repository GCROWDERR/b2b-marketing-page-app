/**
 * Download Figma MCP assets for the Amazon case study page.
 * Run after get_design_context / download_assets — URLs expire after ~7 days.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/marketing/case-study");

const ASSETS = {
  "hero-devices.png": "https://www.figma.com/api/mcp/asset/2f361531-f645-4277-a64a-1f4019c7db37",
  // Raw photo only — not the frame export (that bakes in the green card background).
  "challenge-employee.png":
    "https://www.figma.com/api/mcp/asset/bad7ee55-e9da-4067-b6da-b0d27726f22d",
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
