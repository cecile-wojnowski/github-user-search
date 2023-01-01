import React from "react";

import { TypographyProps } from "components/Typography/Typography.types";

/**
 * Text with variable content and style
 * @param {string} content
 * @param {Object} style
 * @returns {JSX}
 */
export default function Typography({
  content,
  style,
  dataTestid,
}: TypographyProps) {
  return (
    <p data-testid={dataTestid ? dataTestid : "Text"} style={{ ...style }}>
      {content}
    </p>
  );
}
