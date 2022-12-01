import React from "react";

import Box from "components/Containers/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Checkbox from "components/Inputs/Checkbox";
import Button from "components/Buttons/Button";

/**
 *
 * @param {Object} user Contains user's infos from github API
 * @returns {JSX}
 */

export default function Card({ user }: any) {
  // 100px seems to be too small
  return (
    <Box width="150px" flexDirection="column" boxShadow borderRadius>
      <Checkbox />
      <Avatar imageUrl={user?.avatar_url} />
      <Typography content={user?.id} />
      <Typography content={user?.login} />
      <Button content="View profile" />
    </Box>
  );
}
