import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        parser: "@typescript-eslint/parser",
        settings: {
          react: { version: "detect" },
          "import/resolver": {
            typescript: {},
          },
        },
        plugins: ["react-refresh"],
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          "eslint:recommended",
          "plugin:import/errors",
          "plugin:import/warnings",
          "plugin:import/typescript",
          "plugin:@typescript-eslint/recommended",
          "plugin:react/recommended",
          "plugin:react-hooks/recommended",
          "plugin:jsx-a11y/recommended",
          "plugin:prettier/recommended",
        ],
        rules: {
          "react-refresh/only-export-components": "warn",
          "no-restricted-imports": [
            "error",
            {
              patterns: ["@/features/*/*"],
            },
          ],
          "linebreak-style": ["error", "windows"],
          "react/prop-types": "off",

          "import/order": [
            "error",
            {
              groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
              ],
              "newlines-between": "always",
              alphabetize: { order: "asc", caseInsensitive: true },
            },
          ],
          "import/default": "off",
          "import/no-named-as-default-member": "off",
          "import/no-named-as-default": "off",

          "react/react-in-jsx-scope": "off",

          "jsx-a11y/anchor-is-valid": "off",
          "jsx-a11y/aria-role": "off",

          "@typescript-eslint/no-unused-vars": ["warn"],
          "@typescript-eslint/no-non-null-assertion": ["off"],

          "@typescript-eslint/explicit-function-return-type": ["off"],
          "@typescript-eslint/explicit-module-boundary-types": ["off"],
          "@typescript-eslint/no-empty-function": ["off"],
          "@typescript-eslint/no-explicit-any": ["off"],

          "prettier/prettier": [
            "warn",
            { endOfLine: "auto" },
            { usePrettierrc: true },
          ],
        },
      },
    ],
  }
);
