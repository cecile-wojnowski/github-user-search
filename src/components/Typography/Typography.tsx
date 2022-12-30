import React from "react";

type TypographyProps = {
  content: string;
  style?: any;
  fontWeight?: "regular" | "bold";
};

export default function Typography({ content, style }: TypographyProps) {
  return <p style={{ ...style }}>{content}</p>;
}
