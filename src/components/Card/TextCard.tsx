import React from "react";

import { TextCardProps } from "./Card.types";
import isEmpty from "functions/isEmpty";

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
      {!isEmpty(content) ? (
        content.map((info: string | number, index: number) => (
          <Typography
            key={info}
            content={info}
            style={textStyle}
            dataTestid={`InfosUser${index + 1}`}
          />
        ))
      ) : (
        <></>
      )}
    </Box>
  );
}
