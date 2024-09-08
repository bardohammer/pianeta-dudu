import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permette di accedere da qualsiasi dispositivo nella rete
    port: 5174, // Scegli una porta (puoi cambiarla se necessario)
  },
})

