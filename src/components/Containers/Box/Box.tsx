import React from "react";

/**
 * Used to wrap specific content with a defined style passed by the props
 *
 * @param {JSX} children
 * @param {string} justifyContent
 * @returns {JSX} Any content with a specific layout
 */
export default function Box({ children, boxShadow, borderRadius, style }: any) {
  return (
    <div
      data-testid="Box"
      style={{
        ...style,
        display: "flex",
        boxShadow: boxShadow ? "3px 3px 5px grey" : "none", // TODO : must be stored inside a theme
        borderRadius: borderRadius ? "8px" : "O",
      }}
    >
      {children}
    </div>
  );
}
