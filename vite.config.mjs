import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/assets",
          dest: "./",
        },
      ],
    }),
  ],
  server: {
    port: 8080,
  },
});
