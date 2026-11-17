import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => works on both user pages (user.github.io) and project pages (user.github.io/repo)
export default defineConfig({
  base: './',
  plugins: [react()],
})
