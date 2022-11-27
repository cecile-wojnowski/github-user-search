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
}: any) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        width: width,
        justifyContent: justifyContent,
        backgroundColor: "lightgrey",
      }}
    >
      {children}
    </div>
  );
}
