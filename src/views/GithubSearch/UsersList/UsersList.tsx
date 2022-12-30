import React from "react";

import style from "views/GithubSearch/UsersList/style";
import hasLength from "functions/hasLength";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";

export default function UsersList({ users }: any) {
  return (
    <Box style={style}>
      {hasLength(users) ? (
        users.map((user: any, index: number) => (
          <Card key={index} user={user} />
        ))
      ) : (
        <Typography content="No user found" />
      )}
    </Box>
  );
}
