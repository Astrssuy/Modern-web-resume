import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Modern-web-resume/', // Cambia 'CV' por el nombre de tu repo si es diferente
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
}) 