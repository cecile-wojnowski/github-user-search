import React from "react";
import Typography from "components/Typography";

import { style as defaultStyle } from "./style";
import { ButtonProps } from "./Button.type";

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
