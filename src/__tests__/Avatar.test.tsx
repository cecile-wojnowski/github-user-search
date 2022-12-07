import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Avatar from "components/Avatar";
import { user } from "assets/images";

afterEach(cleanup);

describe("Testing <Avatar/> component", () => {
  it("Should render an avatar by passing a value", () => {
    const avatarLabel = "avatar";
    render(
      <Avatar imageUrl="/media/cc0-images/grapefruit-slice-332-332.jpg" />
    );
    const avatar = screen.getByRole("img");
    const imageByariaLabel = screen.getByAltText(avatarLabel);

    expect(avatar).toBeTruthy();
    expect(imageByariaLabel).toHaveAttribute("alt", avatarLabel);
  });

  it("Should render a default image if no value is passed", () => {
    const avatarLabel = "default";
    render(<Avatar />);
    const avatar = screen.getByRole("img");
    const imageByariaLabel = screen.getByAltText(avatarLabel);

    expect(avatar).toBeTruthy();
    expect(imageByariaLabel).toHaveAttribute("alt", avatarLabel);
  });
});
