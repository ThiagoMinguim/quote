import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/public', replacement: path.resolve(__dirname, '/public') },
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ]
  },
  plugins: [react()]
})
