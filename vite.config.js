import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // keep this if you're using a custom domain (not GitHub subdomain)
  build: {
    // The prerenderer uses this map to replace development asset URLs with
    // their hashed production equivalents.
    manifest: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
});

