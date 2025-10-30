import type { Config } from '@react-router/dev/config';

export default {
  // Enable SSR (Server-Side Rendering)
  ssr: true,
  // Vercel serverless configuration
  serverBuildFile: 'index.js',
} satisfies Config;
