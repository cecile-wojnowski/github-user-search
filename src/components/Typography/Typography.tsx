import React from "react";

type TypographyProps = {
  content: string;
  style?: any;
};

export default function Typography({ content }: TypographyProps) {
  return <p>{content}</p>;
}
