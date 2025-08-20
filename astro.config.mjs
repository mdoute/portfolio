// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',              // ensure static output (no SSR)
  trailingSlash: 'never',        // optional
  vite: {
    plugins: [tailwindcss()],
  },
})
