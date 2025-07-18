import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

// security eslint
import pluginSecurity from "eslint-plugin-security"

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { 
      js, 
      react: pluginReact,
      security: pluginSecurity
    }, 
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
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "security/detect-eval-with-expression": "error"
    }
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
  js.configs.recommended,
]);