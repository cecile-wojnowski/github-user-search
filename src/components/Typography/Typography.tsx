import React from "react";

type TypographyProps = {
  content: string;
  style?: any;
  fontWeight?: "regular" | "bold";
};

export default function Typography({
  content,
  fontWeight = "regular",
}: TypographyProps) {
  return <p style={{ fontWeight: fontWeight }}>{content}</p>;
}
