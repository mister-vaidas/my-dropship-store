// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,          // core JS rules
  tseslint.configs.recommended,        // TypeScript rules
  reactPlugin.configs.flat.recommended, // React rules
  reactPlugin.configs.flat["jsx-runtime"], // ⬅ turns off react/react-in-jsx-scope
  {
    // project-wide tweaks
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },    // silence “version not specified” warning
    },
    rules: {
      // anchor-tag safety (adjust or disable)
      "react/jsx-no-target-blank": [
        "error",
        { allowReferrer: true, enforceDynamicLinks: "always" },
      ],
    },
  }
);
