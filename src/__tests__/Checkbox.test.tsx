import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "utils/matchMedia-mock";

import GithubSearchProvider from "contexts/github-search-context";
import Checkbox from "components/Inputs/Checkbox";

afterEach(cleanup);

describe("Testing <Checkbox/> component", () => {
  it("Should render a checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeTruthy();
  });

  it("Should be checked and unchecked on click", async () => {
    const user = userEvent.setup();
    render(
      <GithubSearchProvider>
        <Checkbox />
      </GithubSearchProvider>
    );

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
