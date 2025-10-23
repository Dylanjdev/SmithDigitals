import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // keep this if you’re using a custom domain (not GitHub subdomain)
});

