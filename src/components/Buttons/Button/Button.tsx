import React from "react";
import Typography from "components/Typography";

import { ButtonProps } from "./Button.type";

// TODO : use theme
const defaultStyle = {
  backgroundColor: "#13b0f5",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

export default function Button({
  onClick,
  content,
  style = defaultStyle,
}: ButtonProps) {
  return (
    <button onClick={onClick} style={{ ...style }}>
      <Typography content={content} style={{ fontWeight: 500 }} />
    </button>
  );
}
