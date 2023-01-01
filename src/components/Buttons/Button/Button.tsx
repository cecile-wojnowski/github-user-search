import React from "react";
import Typography from "components/Typography";

import { style as defaultStyle } from "./style";
import { ButtonProps } from "./Button.type";

export default function Button({
  onClick,
  content,
  style = defaultStyle,
  dataTestid,
}: ButtonProps) {
  return (
    <button onClick={onClick} style={{ ...style }} data-testid={dataTestid}>
      <Typography content={content} style={{ fontWeight: 550 }} />
    </button>
  );
}
