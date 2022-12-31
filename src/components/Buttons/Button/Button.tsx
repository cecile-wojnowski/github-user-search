import React from "react";
import Typography from "components/Typography";

import theme from "styles/theme";
import { ButtonProps } from "./Button.type";

// TODO : use theme
const defaultStyle = {
  backgroundColor: theme.colors.lightblue,
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
      <Typography content={content} style={{ fontWeight: 550 }} />
    </button>
  );
}
