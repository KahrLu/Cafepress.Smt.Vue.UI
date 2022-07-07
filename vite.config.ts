import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages({
      dirs: 'pages',
      exclude: ['**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'layouts',
      defaultLayout: 'default'
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dirs: ['./composables', './plugins'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['components', 'layouts'],
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
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
