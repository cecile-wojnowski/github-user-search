import React from "react";

import { HeaderProps } from "./Header.types";
import style from "./style";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

export default function Header({ content }: HeaderProps) {
  return (
    <header>
      <Box style={style}>
        <Typography style={{ fontWeight: "bold" }} content={content} />
      </Box>
    </header>
  );
}
