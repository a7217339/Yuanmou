import { fileURLToPath, URL } from 'node:url'
import * as path from "path";
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  css: {
    preprocessorOptions: {
      scss: { additionalData: `` },
    },
  
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
        extensions: ["vue", "md"],
    // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts",
    }),
   
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const a = id.toString().split("node_modules/");
            const name = a.at(-1)?.split("/")[0];
            return name;
            // if (big.includes(name)) return name;
            // else return "vendor";
          } else if (id.includes("/")) {
            if (id.includes("/src/assets/")) return "assets";
            // const m = id.match(/src\/(.+?)\//);
            // if (m) return m[1];
            return "index";
          }
          console.log("other", id);
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }







  
})
