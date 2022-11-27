import React from "react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";
import Checkbox from "components/Inputs/Checkbox";
import Button from "components/Buttons/Button";

// TODO : ID & Login must be variables
export default function Card() {
  return (
    <Box width="100px" flexDirection="column">
      <Checkbox />
      <Typography content="ID" />
      <Typography content="Login" />
      <Button content="View profile" />
    </Box>
  );
}
