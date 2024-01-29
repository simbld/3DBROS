import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/pages", "<rootDir>/__tests__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};

export default config;
