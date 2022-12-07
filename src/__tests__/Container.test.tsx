import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Container from "components/Containers/Container";
import Typography from "components/Typography";

afterEach(cleanup);

describe("Testing <Container/> component", () => {
  it("Should render children and apply a global CSS", () => {
    const content = "test";
    render(
      <Container>
        <Typography content={content} />
      </Container>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
