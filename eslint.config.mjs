import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: [
      "dist/*",
      "assets/*",
      "jest.config.js",
      "node_modules/*",
      "server/*",
    ],
  },
);
