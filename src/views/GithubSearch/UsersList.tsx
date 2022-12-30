import React from "react";

import hasLength from "functions/hasLength";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";

// TODO : créer un fichier de style pour le CSS plutôt que  de multiplier les props
export default function UsersList({ users }: any) {
  const style = {
    maxWidth: "100%",
    height: "320px",
    overflowY: "scroll",
    overflowX: "clip",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "5%",
    paddingInline: "1%",
  };
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
