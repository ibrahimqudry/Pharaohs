import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://ibrahimqudry.github.io/Pharaohs/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

