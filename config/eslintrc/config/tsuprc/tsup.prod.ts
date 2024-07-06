import config from './tsup.base';
import { copy } from 'esbuild-plugin-copy';
import { defineConfig } from 'tsup';

export default defineConfig({
  ...config,

  minify: true,
  shims: true,
  outDir: 'dist',

  format: ['cjs'],
});
