import React from "react";
import Typography from "components/Typography";

import { ButtonProps } from "./Button.type";

export default function Button({ onClick, content }: ButtonProps) {
  return (
    <button onClick={onClick}>
      <Typography content={content} />
    </button>
  );
}
