import React from "react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

type HeaderProps = {
  content: string;
};

export default function Header({ content }: HeaderProps) {
  const style = {
    backgroundColor: "grey", // TODO : store color in the same file
    justifyContent: "center",
    height: "64px",
    marginBottom: "3%",
  };
  return (
    <header>
      <Box style={style}>
        <Typography style={{ fontWeight: "bold" }} content={content} />
      </Box>
    </header>
  );
}
