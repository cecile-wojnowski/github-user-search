import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Button from "components/Buttons/Button";

afterEach(cleanup);

describe("Testing <Button/> component", () => {
  it("Should render a button with a label", () => {
    const content = "test";
    render(<Button content={content} onClick={() => {}} />);

    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });
});
