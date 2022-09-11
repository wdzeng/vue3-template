import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 4000,
    // https://vitejs.dev/config/server-options.html#server-proxy
    // forward /api to a backend server on http://localhost:9487
    proxy: {
      '/api': {
        target: 'http://localhost:9487',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
