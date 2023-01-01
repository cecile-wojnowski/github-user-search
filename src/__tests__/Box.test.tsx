import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

afterEach(cleanup);

describe("Testing <Box/> component", () => {
  it("Should render children components and apply specified CSS", () => {
    const content = "test";
    render(
      <Box style={{ width: "200px" }}>
        <Typography content={content} />
      </Box>
    );

    const box = screen.getByTestId("Box");
    expect(box).toBeTruthy();
    expect(box).toHaveStyle("width: 200px");
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
