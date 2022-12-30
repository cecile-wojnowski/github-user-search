import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Button from "components/Buttons/Button";

/**
 * Enable edit mode with variable text and border color
 * @returns {JSX} Button
 */
export default function EditButton() {
  // @ts-ignore
  const { canEdit, setCanEdit } = useContext(GithubSearchContext);
  const style = {
    backgroundColor: "lightgrey",
    borderRadius: "8px",
    borderColor: !canEdit ? "green" : "red",
    cursor: "pointer",
  };
  return (
    <Button
      style={style}
      onClick={() => setCanEdit(!canEdit)}
      content={!canEdit ? "Enable edit mode" : "Disable edit mode"}
    />
  );
}
