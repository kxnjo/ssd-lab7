import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js, react: pluginReact }, 
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha  // ✅ This fixes 'describe', 'it', 'after'
      },
    },
    settings: {
      react: {
        version: "detect"  // ✅ This fixes the React warning
      }
    },
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
  js.configs.recommended,
]);