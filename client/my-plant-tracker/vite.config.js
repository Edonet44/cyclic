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
        target: 'https://yellow-vulture-suit.cyclic.app',  //dominio server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/plants/, ''),
        headers: {
          'Access-Control-Allow-Origin': 'https://myplanttracker-2e0a9.web.app', // dominio client
          'Access-Control-Allow-Credentials': 'true',
        },
      },
       '/plants/:id': { // Esempio di percorso con un parametro ID
      target: 'https://yellow-vulture-suit.cyclic.app', // dominio server
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/plants\/id\//, '/'), // Assicurati che il parametro ID venga incluso
      rewrite: (path) => path.replace(/^\/plants\//, '/'),
         headers: {
        'Access-Control-Allow-Origin': 'https://myplanttracker-2e0a9.web.app', // dominio client
        'Access-Control-Allow-Credentials': 'true',
      },
    },
    },
  },
})
