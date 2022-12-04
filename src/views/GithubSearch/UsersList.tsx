import React from "react";

import hasLength from "functions/hasLength";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";

export default function UsersList({ users }: any) {
  return (
    <Box grid center>
      {hasLength(users) ? (
        users.map((user: any) => <Card user={user} />)
      ) : (
        <Typography content="No user found" />
      )}
    </Box>
  );
}
