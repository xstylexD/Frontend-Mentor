import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: command === 'build'
    ? '/Frontend-Mentor/faq-accordion-main/'
    : '/',

  server: {
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: [
        '**/dist/**',
        '**/node_modules/**',
        '**/.git/**'
      ]
    }
  }
}))