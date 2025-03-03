import {resolve} from "node:path";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

const {dirname} = import.meta;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: [{find: "@", replacement: resolve(dirname, "src")}],
  },
});
