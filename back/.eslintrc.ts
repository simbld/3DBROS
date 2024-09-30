import { Linter } from "eslint";

const config: Linter.Config = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "ormconfig.js",
    ".eslintrc.cjs",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./back/tsconfig.e2e.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        quoteProps: "as-needed",
        endOfLine: "auto",
      },
    ],
    "comma-dangle": ["error", "never"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: ["./tsconfig.json", "./tsconfig.e2e.json"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};

export default config;
