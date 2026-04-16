import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env vars based on current mode (production, development, etc.)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      // Explicitly define your env vars for the build
      'import.meta.env.VITE_PUBLIC_KEY_EMAILJS': JSON.stringify(env.VITE_PUBLIC_KEY_EMAILJS),
      'import.meta.env.VITE_SERVICE_ID_EMAILJS': JSON.stringify(env.VITE_SERVICE_ID_EMAILJS),
      'import.meta.env.VITE_TEMPLATE_ID_EMAILJS': JSON.stringify(env.VITE_TEMPLATE_ID_EMAILJS),
    }
  }
})