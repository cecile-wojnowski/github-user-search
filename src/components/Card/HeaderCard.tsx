import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import { HeaderCardProps } from "./Card.types";

import Box from "components/Containers/Box";
import Avatar from "components/Avatar";
import Checkbox from "components/Inputs/Checkbox";
import { GithubSearchContextType } from "contexts/github-search-context.types";

/**
 *
 * @param user Used to get the user id and the avatar url
 * @returns {JSX} Checkbox visible in edit mode and avatar
 */

export default function HeaderCard({
  id,
  imageUrl,
  duplicatedId,
  dataTestid,
}: HeaderCardProps) {
  const { canEdit } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  const style = {
    width: "35%",
    marginTop: "10%",
    marginLeft: canEdit ? "10%" : "30%",
  };
  return (
    <Box>
      {canEdit ? ( // a ternary here avoid to throw an error is there is an undefined value
        <Checkbox
          userId={duplicatedId ? duplicatedId : id}
          dataTestid={dataTestid}
        />
      ) : (
        <></>
      )}
      <Avatar imageUrl={imageUrl} style={style} />
    </Box>
  );
}
