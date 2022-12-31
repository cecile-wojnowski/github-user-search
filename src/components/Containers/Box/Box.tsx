import React from "react";

import theme from "styles/theme";
import { BoxProps } from "./Box.types";

/**
 * Used to wrap specific content with a defined style passed by the props
 *
 * @param {JSX} children
 * @param {string} justifyContent
 * @returns {JSX} Any content with a specific layout
 */
export default function Box({
  children,
  boxShadow,
  borderRadius,
  style,
  dataTestid,
}: BoxProps) {
  return (
    <div
      data-testid={dataTestid ? dataTestid : "Box"}
      style={{
        ...style,
        display: "flex",
        boxShadow: boxShadow ? theme.boxShadow : "none", // TODO : must be stored inside a theme
        borderRadius: borderRadius ? theme.borderRadius : "O",
      }}
    >
      {children}
    </div>
  );
}
