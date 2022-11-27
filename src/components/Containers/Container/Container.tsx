import React from "react";

/**
 * Handle general layout
 *
 * @param {JSX} children
 * @returns {JSX} All the page content with default style
 */
export default function Container({ children }: any) {
  return <div>{children}</div>;
}
