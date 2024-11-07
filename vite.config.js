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
    include: ['@aws-amplify/auth']
  }
});
