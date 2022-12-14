import React, { useContext, useState } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

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
  // @ts-ignore
  const { canEdit } = useContext(GithubSearchContext);

  function handleClick() {
    window.location.href = user.html_url;
  }

  // 100px seems to be too small
  return (
    <Box width="150px" flexDirection="column" boxShadow borderRadius>
      {canEdit ? <Checkbox userId={user.id} /> : null}
      <Avatar imageUrl={user?.avatar_url} />
      <Typography content={user?.id} />
      <Typography content={user?.login} />
      <Button onClick={handleClick} content="View profile" />
    </Box>
  );
}
