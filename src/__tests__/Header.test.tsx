import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Header from "components/Header";

afterEach(cleanup);

describe("Testing <Header/> component", () => {
  it("Should render a header with a background and a text", () => {
    const headerContent = "Github search";
    render(<Header content={headerContent} />);
    const header = screen.getByRole("banner");

    expect(header).toBeTruthy();
    expect(screen.getByText(headerContent)).toBeInTheDocument();
  });
});
