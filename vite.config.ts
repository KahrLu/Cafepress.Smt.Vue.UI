import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', '@vueuse/core', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dirs: ['./composables', './plugins'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('^/api', '/api'),
      },
    },
  },
})
