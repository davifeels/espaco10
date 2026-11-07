import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base to './' so assets work anywhere, including GitHub Pages subpaths (e.g. https://user.github.io/repo-name/)
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
