import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  build: {
    sourcemap: false,
    cssMinify: true,
  },
  css: {
    devSourcemap: false,
  },
  server: {
    headers: {
      'Content-Security-Policy':
        "script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'none';",
    },
  },
  plugins: [
    {
      name: 'ignore-installhook-sourcemap',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith('/installHook.js.map')) {
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json; charset=utf-8');
            res.end('{}');
            return;
          }
          next();
        });
      },
    },
    devtoolsJson(),
    tailwindcss(),
    tsconfigPaths(),
    reactRouter(),
  ],
});
