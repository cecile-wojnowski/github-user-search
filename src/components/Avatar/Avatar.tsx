import React from "react";

/**
 *
 * @param {string} imageUrl
 * @param {Object} style
 * @returns {JSX} Image with default value
 */
export default function Avatar({ imageUrl, style }: any) {
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
