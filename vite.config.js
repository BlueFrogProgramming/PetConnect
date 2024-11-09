import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: require.resolve('buffer/'),
    },
  },
  define: {
    'global': {},
  },
  optimizeDeps: {
    include: ['@aws-amplify/auth'],
  },
  server: {
    host: '0.0.0.0',       // Allow external access on Replit
    port: process.env.PORT || 5173, // Use Replit's assigned PORT or default to 5173
  },
});

