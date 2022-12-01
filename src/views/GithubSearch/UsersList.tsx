import React from "react";

import hasLength from "functions/hasLength";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";

export default function UsersList({ data, countUsers }: any) {
  return (
    <Box grid center>
      {hasLength(data) ? (
        data.map((user: any) => <Card user={user} countUsers={countUsers} />)
      ) : (
        <Typography content="No user found" />
      )}
    </Box>
  );
}
