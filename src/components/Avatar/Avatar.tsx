import React from "react";

export default function Avatar({ imageUrl }: any) {
  return (
    <img
      style={{ borderRadius: "50%", width: "50%" }}
      src={imageUrl}
      alt="avatar"
    />
  );
}
