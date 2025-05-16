module.exports = {
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': [
    'biome check --write --no-errors-on-unmatched', // Format, sort imports, lint, and apply safe fixes
    'biome check --write --organize-imports-enabled=false --no-errors-on-unmatched', // format and apply safe fixes
    'biome format --write --no-errors-on-unmatched', // Format
    'biome lint --write --no-errors-on-unmatched', // Lint and apply safe fixes
  ],
};
