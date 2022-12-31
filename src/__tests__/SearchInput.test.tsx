import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GithubSearchProvider from "contexts/github-search-context";
import SearchInput from "components/Inputs/SearchInput";

afterEach(cleanup);

/*
 * Workaround for "window.matchMedia is not a function"
 * See https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Testing <SearchInput/> component", () => {
  it("Should render an input displaying the user input", async () => {
    const user = userEvent.setup();
    render(
      <GithubSearchProvider>
        <SearchInput />
      </GithubSearchProvider>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");
  });
});
