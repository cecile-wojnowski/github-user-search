import React from "react";

import style from "views/GithubSearch/UsersList/style";
import hasLength from "functions/hasLength";

import Box from "components/Containers/Box";
import Card from "components/Card";

/**
 * A scrollable container with the list of cards users
 * @param {Object} users Array of users with their infos
 * @returns
 */
export default function UsersList({ users }: any) {
  return (
    <Box style={style}>
      {hasLength(users) // Make sure to not map on an empty array
        ? users.map((user: any, index: number) => (
            <Card key={index} user={user} />
          ))
        : null}
    </Box>
  );
}
