import React from "react";

import { ContainerProps } from "./Container.types";
import theme from "styles/theme";

/**
 * Handle general layout
 *
 * @param {JSX} children
 * @returns {JSX} All the page content with default style
 */
export default function Container({ children }: ContainerProps) {
  return <div style={{ margin: theme.globalMargin }}>{children}</div>;
}
