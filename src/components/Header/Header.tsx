import React from "react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

type HeaderProps = {
  content: string;
};

export default function Header({ content }: HeaderProps) {
  return (
    <header>
      <Box
        backgroundColor="grey"
        justifyContent="center"
        height="64px"
        marginBottom="3%"
      >
        <Typography fontWeight="bold" content={content} />
      </Box>
    </header>
  );
}
