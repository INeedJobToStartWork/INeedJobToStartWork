import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*'],
  target: 'es2022',
  format: ['esm'],
  clean: true,
  splitting: false,
  platform: 'node',
  keepNames: true,
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
