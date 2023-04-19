import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import eslint from 'vite-plugin-eslint';
import Unfonts from 'unplugin-fonts/vite';

const resolve = {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/netlflix-dashboard-example/',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/global-styles/styles/mixins.scss";`,
      },
    },
  },
  plugins: [
    react(),
    eslint(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Space Grotesk',
            styles: 'wght@400;500;600;700',
          },
        ],
      },
    }),
  ],
  resolve,
});
