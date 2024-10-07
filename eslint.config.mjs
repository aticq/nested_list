import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["**/temp.js", "config/*", "build/*", "src/app/types/global.d.ts"],
  },
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        document: true,
        __dirname: true,
        window: true,
        ...globals.browser,
        ...globals.mocha,
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/jsx-filename-extension": [
        2,
        {
          extensions: [".js", ".jsx", ".tsx"],
        },
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "react/jsx-props-no-spreading": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
];