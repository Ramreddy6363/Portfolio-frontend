import type { Config } from '@react-router/dev/config';

export default {
  // Enable SSR (Server-Side Rendering)
  ssr: true,
  // Ensure consistent CSS generation between server and client
  buildDirectory: 'build',
} satisfies Config;
