/**
 * Add the following to your jest.config.ts:
 * testEnvironment: "jsdom".
 * This is because Next.js uses jsdom as the test environment.
 *
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the welcome message", () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/Welcome to Next.js!/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
