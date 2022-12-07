import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Typography from "components/Typography";

afterEach(cleanup);

describe("Testing <Typography/> component", () => {
  it("Should render a text", () => {
    const content = "Test";
    render(<Typography content={content} />);

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
