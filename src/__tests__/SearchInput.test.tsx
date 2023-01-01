import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../utils/matchMedia-mock";

import GithubSearchProvider from "contexts/github-search-context";
import SearchInput from "components/Inputs/SearchInput";

afterEach(cleanup);

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
