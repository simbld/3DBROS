/**
 * @file This test suite verifies the correct rendering of the Home component.
 *
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://jestjs.io/docs/configuration#testenvironment-string
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
