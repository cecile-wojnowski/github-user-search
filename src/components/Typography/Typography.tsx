import React from "react";

import { TypographyProps } from "components/Typography/Typography.types";

/**
 * Text with variable content and style
 * @param {string} content
 * @param {Object} style
 * @returns {JSX}
 */
export default function Typography({ content, style }: TypographyProps) {
  return <p style={{ ...style }}>{content}</p>;
}
