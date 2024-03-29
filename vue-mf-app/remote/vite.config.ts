import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Counter': './src/components/Counter.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    cssCodeSplit: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
