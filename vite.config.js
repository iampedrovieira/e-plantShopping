import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000, // Change this to your desired port
  },
})
