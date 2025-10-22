import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';

// Different build output dirs for different deploy envs with different
// base paths
const outDir = process.env.ENV ? `dist-${process.env.ENV}` : 'dist';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Needed until Bootstrap migrates off Node Sass and onto Sass modules
  // Optimistic estimate: 5.5
  // Pessimistic estimate: 6
  // See thread: https://github.com/orgs/twbs/discussions/41370
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'color-functions', 'global-builtin'],
      },
    },
  },
  build: {
    outDir,
  },
});
