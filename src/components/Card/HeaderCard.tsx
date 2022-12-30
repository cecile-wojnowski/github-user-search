import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import Avatar from "components/Avatar";
import Checkbox from "components/Inputs/Checkbox";

/**
 *
 * @param user Used to get the user id and the avatar url
 * @returns {JSX} Checkbox visible in edit mode and avatar
 */

export default function HeaderCard({ user }: any) {
  // @ts-ignore
  const { canEdit } = useContext(GithubSearchContext);

  const style = {
    width: "35%",
    marginTop: "10%",
    marginLeft: canEdit ? "10%" : "30%",
  };
  return (
    <Box>
      {canEdit ? <Checkbox userId={user.id} /> : null}
      <Avatar imageUrl={user?.avatar_url} style={style} />
    </Box>
  );
}
