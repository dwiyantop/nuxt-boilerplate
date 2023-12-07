/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      dirs: [ path.resolve(__dirname, 'components') ],
      directoryAsNamespace: true
    })
  ],
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8', // instanbul or 'v8',
      include: [
        '**/*.ts', '**/*.vue'
      ],
      exclude: [
        '**/*.d.ts', 'app.vue', '.nuxt', 'nuxt.config.ts', 'tailwind.config.ts'
      ]
    },
    exclude: [ ...configDefaults.exclude ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.')
    }
  }
});
