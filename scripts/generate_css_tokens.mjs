import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const tokensPath = path.join(rootDir, 'vendor', 'shared', 'design-tokens', 'tokens.json');
const outPath = path.join(rootDir, 'src', 'styles', 'design-tokens.css');

function resolveAlias(value, primitivesColors) {
  if (typeof value !== 'string') return null;
  if (value.startsWith('#')) return value;

  if (value.startsWith('{') && value.endsWith('}')) {
    const inside = value.slice(1, -1);
    const prefix = 'primitives.colors.';
    if (!inside.startsWith(prefix)) return null;
    const key = inside.slice(prefix.length);
    return primitivesColors?.[key] ?? null;
  }

  return null;
}

function hexToRgbTriplet(hex) {
  if (typeof hex !== 'string') return null;
  const cleaned = hex.trim().replace(/^#/, '');
  const full = cleaned.length === 3
    ? cleaned.split('').map((c) => c + c).join('')
    : cleaned;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function semanticKeyToCssVar(semanticKey) {
  // "color.text.primary" -> "--lw-color-text-primary"
  const dashed = semanticKey
    .replaceAll('.', '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return `--lw-${dashed}`;
}

async function main() {
  const raw = await fs.readFile(tokensPath, 'utf8');
  const tokens = JSON.parse(raw);

  const primitivesColors = tokens?.primitives?.colors ?? {};
  const light = tokens?.semantic?.light ?? {};
  const dark = tokens?.semantic?.dark ?? {};

  const keys = Array.from(new Set([...Object.keys(light), ...Object.keys(dark)])).sort();

  const renderBlock = (values) => {
    const lines = [];
    for (const key of keys) {
      const rawValue = values?.[key];
      const resolved = resolveAlias(rawValue, primitivesColors) ?? rawValue;
      const rgb = hexToRgbTriplet(resolved);
      if (!rgb) {
        // Skip unknown formats; keep generation resilient.
        continue;
      }
      lines.push(`  ${semanticKeyToCssVar(key)}: ${rgb};`);
    }
    return lines.join('\n');
  };

  const css = `/* AUTO-GENERATED: do not edit by hand.
   Source: vendor/shared/design-tokens/tokens.json
   Command: npm run generate:tokens
*/

:root {
${renderBlock(light)}
}

@media (prefers-color-scheme: dark) {
  :root {
${renderBlock(dark)}
  }
}
`;

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, css, 'utf8');
  console.log(`Wrote ${path.relative(rootDir, outPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
