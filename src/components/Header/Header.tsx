import React from "react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

// Use something else than style
export default function Header() {
  return (
    <Box
      backgroundColor="grey"
      justifyContent="center"
      height="64px"
      marginBottom="3%"
    >
      <Typography fontWeight="bold" content="Github search" />
    </Box>
  );
}
