import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cv/', // This should match your repository name
  build: {
    outDir: 'dist',
  },
})