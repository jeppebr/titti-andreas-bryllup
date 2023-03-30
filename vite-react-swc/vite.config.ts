import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    reactRefresh(),
    // VitePWA({
    //   injectRegister: 'auto',
    //   // registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true,
    //   },
    //   manifest: {
    //     name: 'Titti og andreas bryllup',
    //     short_name: 'T+A=<3',
    //     description: 'Bryllups info for Titti og Andreas bryllup',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/icons/192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //       {
    //         src: '/icons/512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //     ],
    //   },
    //   workbox: {
    //     sourcemap: true,
    //     runtimeCaching: [
    //       {
    //         urlPattern: ({ url }) => {
    //           return url.pathname.startsWith(
    //             '/v2021-10-21/data/query/production'
    //           );
    //         },
    //         handler: 'CacheFirst' as const,
    //         options: {
    //           cacheName: 'api-cache',
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
});
