import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Card from "components/Card";

afterEach(cleanup);

describe("Testing <Card/> component", () => {
  it("Should render a card with an avatar, text and a button", () => {
    const id = 1;
    const login = "test";
    render(<Card id={id} login={login} imageUrl="" profileUrl="" />);

    const avatar = screen.getByRole("img");
    const button = screen.getByRole("button");

    expect(avatar).toBeTruthy();
    expect(screen.getByText(id)).toBeInTheDocument();
    expect(screen.getByText(login)).toBeInTheDocument();
    expect(button).toBeTruthy();
  });
});
