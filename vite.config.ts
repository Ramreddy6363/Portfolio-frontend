import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [devtoolsJson(), tailwindcss(), tsconfigPaths(), reactRouter()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Only apply manual chunks for client build, not SSR
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router')
            ) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('ogl')) {
              return 'animations';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
