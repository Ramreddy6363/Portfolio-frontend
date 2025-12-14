import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import devtoolsJson from 'vite-plugin-devtools-json'; // Removed unused plugin

export default defineConfig({
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Clean code splitting for better performance
          if (id.includes('node_modules')) {
            // Core React libraries
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router')
            ) {
              return 'react-vendor';
            }
            // Icon library
            if (id.includes('react-icons')) {
              return 'icons';
            }
            // Other node_modules
            return 'vendor';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
});
