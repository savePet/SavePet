import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// module.exports = {
//   // Outras configurações aqui
//   server: {
//     port: 3000
//   },
//   build: {
//     // Outras configurações de build aqui
//   }
// }