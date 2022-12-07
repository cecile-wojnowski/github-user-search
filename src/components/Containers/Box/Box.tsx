import React from "react";

/**
 * Used to wrap specific content with a defined style passed by the props
 *
 * @param {JSX} children
 * @param {string} justifyContent
 * @returns {JSX} Any content with a specific layout
 */
export default function Box({
  children,
  flexDirection,
  justifyContent,
  width,
  height,
  backgroundColor,
  marginBottom,
  boxShadow,
  borderRadius,
  grid,
}: any) {
  return (
    <div
      data-testid="Box"
      style={{
        display: grid ? "grid" : "flex",
        flexDirection: flexDirection,
        width: width,
        height: height,
        justifyContent: justifyContent,
        backgroundColor: backgroundColor,
        marginBottom: marginBottom,
        boxShadow: boxShadow ? "10px 5px 5px black" : "none",
        borderRadius: borderRadius ? "8px" : "O",
        gridTemplateColumns: grid && "200px 200px 200px 200px",
        gridTemplateRows: grid && "300px 300px 300px 300px",
        columnGap: grid && "10px",
        rowGap: grid && "15px",
      }}
    >
      {children}
    </div>
  );
}
