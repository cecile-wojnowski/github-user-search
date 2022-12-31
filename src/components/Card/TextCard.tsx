import React from "react";

import { TextCardProps } from "./Card.types";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

export default function TextCard({ content }: TextCardProps) {
  const textStyle = {
    fontSize: "14px",
    fontWeight: 600,
    margin: 0,
    textAlign: "center",
  };
  return (
    <Box
      style={{
        flexDirection: "column",
        paddingBlock: "10%",
      }}
    >
      {content.length > 0 &&
        content.map((info: string | number) => (
          <Typography key={info} content={info} style={textStyle} />
        ))}
    </Box>
  );
}
