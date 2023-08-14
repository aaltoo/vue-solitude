import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import url from "url";
import * as path from "path";
import dts from "vite-plugin-dts";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "solitude",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `solitude.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/main.ts"),
      },
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
