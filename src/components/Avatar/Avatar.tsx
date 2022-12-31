import React from "react";

import { AvatarProps } from "./Avatar.types";

/**
 *
 * @param {string} imageUrl
 * @param {Object} style
 * @returns {JSX} Image with default value
 */
export default function Avatar({ imageUrl, style }: AvatarProps) {
  const defaultUserImage = require("assets/images/user.png");

  return (
    <img
      style={{
        borderRadius: "50%",
        ...style,
      }}
      src={imageUrl ? imageUrl : defaultUserImage}
      alt={imageUrl ? "avatar" : "default"}
    />
  );
}
