import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  server: { https: true },
  plugins: [mkcert(), reactRefresh()]
})