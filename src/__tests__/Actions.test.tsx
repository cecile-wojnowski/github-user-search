import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Actions from "components/Actions";

afterEach(cleanup);

describe("Testing <Actions/> component", () => {
  it("Should render multiple buttons with icons", () => {
    const actions = ["delete", "duplicate"];
    render(<Actions icons={actions} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toBeTruthy();
  });

  it("Should not render any button", () => {
    const actions = ["test", "action"];
    render(<Actions icons={actions} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
