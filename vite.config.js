import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-grid-dashboard',
      closeBundle() {
        copyFileSync('grid_terrorism_dashboard.html', 'dist/grid_terrorism_dashboard.html');
      }
    }
  ],
  base: '/n01ui/'
});
