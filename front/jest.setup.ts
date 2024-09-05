import "@testing-library/jest-dom/extend-expect";
import { config } from "dotenv";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

config({ path: ".env" });
