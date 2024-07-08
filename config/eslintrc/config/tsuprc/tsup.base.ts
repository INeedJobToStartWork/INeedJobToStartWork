import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2020',
  format: ['esm'],
  clean: true,
  splitting: false,
  platform: 'node',

  banner: ({ format }) => {
    if (format === 'esm') {
      const banner = `
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
      `;
      return { js: banner };
    }
  },
});
