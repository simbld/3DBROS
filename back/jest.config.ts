import type { Config } from "jest";
const config: Config = {
  roots: ["<rootDir>/__tests__", "<rootDir>/pages", "<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.spec.ts"],
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect"
  ]
};

export default config;
