import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8'
    },
    globals: true,
    environment: 'jsdom',
  },
  server: {
    proxy: {
      '/api' : 'http://localhost:3001'
    }
  }
})
