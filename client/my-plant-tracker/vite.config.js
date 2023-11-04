import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/plants': {
        target: 'https://yellow-vulture-suit.cyclic.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/plants/, ''),
        headers: {
          'Access-Control-Allow-Origin': 'https://myplanttracker-2e0a9.web.app', // Sostituisci con il dominio del tuo client
          'Access-Control-Allow-Credentials': 'true',
        },
      },
    },
  },
})
