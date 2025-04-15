import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@mantine/carousel'], // Exclude @mantine/carousel from dependency optimization
  },
  server: {
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
});
