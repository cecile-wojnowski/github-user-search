import React from "react";

export default function Avatar({ imageUrl }: any) {
  const defaultUserImage = require("assets/images/user.png");

  return (
    <img
      style={{ borderRadius: "50%", width: "50%" }}
      src={imageUrl ? imageUrl : defaultUserImage}
      alt={imageUrl ? "avatar" : "default"}
    />
  );
}
