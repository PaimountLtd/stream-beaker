import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  base: '/beaker/',
  plugins: [createVuePlugin()],
  build: {
    sourcemap: true,
    commonjsOptions: {
      requireReturnsDefault: true
    }
  }
})