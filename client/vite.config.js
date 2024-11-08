// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/reviews': 'http://localhost:5000', 
      '/api/auth': 'http://localhost:5000', 
    },
  },
});
