import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        test: './projects.html',
        // ...
        // List all files you want in your build
      }
    }
  },

  base: ''
})
