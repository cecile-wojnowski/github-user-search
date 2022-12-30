import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import Avatar from "components/Avatar";
import Checkbox from "components/Inputs/Checkbox";

export default function HeaderCard({ user }: any) {
  // @ts-ignore
  const { canEdit } = useContext(GithubSearchContext);
  return (
    <Box>
      {canEdit ? <Checkbox userId={user.id} /> : null}
      <Avatar imageUrl={user?.avatar_url} />
    </Box>
  );
}
