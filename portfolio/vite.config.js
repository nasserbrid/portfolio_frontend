import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ajout de la config sur render
  preview: {
    allowedHosts: ['portfolio-frontend-x9yr.onrender.com'], 
  },
});
