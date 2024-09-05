module.exports = {
  ignorePatterns: ["*.md"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
  },
  overrides: [
    {
      files: ["*.json"],
      rules: {
        "prettier/prettier": 2,
        "no-unused-expressions": 0,
        "no-undef": 0,
      },
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    indent: [2, 2],
    "linebreak-style": [2, "unix"],
    quotes: [2, "double"],
    semi: [2, "always"],
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "prettier/prettier": [
      2,
      {
        endOfLine: "auto",
      },
    ],
  },
};
