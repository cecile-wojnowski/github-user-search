import React, { useContext } from "react";

import theme from "styles/theme";
import style from "./style";
import { GithubSearchContext } from "contexts/github-search-context";

import Button from "components/Buttons/Button";

/**
 * Enable edit mode with variable text and border color
 * @returns {JSX} Button
 */
export default function EditButton() {
  // @ts-ignore
  const { canEdit, setCanEdit } = useContext(GithubSearchContext);

  return (
    <Button
      style={{
        ...style,
        borderColor: !canEdit ? theme.colors.green : theme.colors.red,
      }}
      onClick={() => setCanEdit(!canEdit)}
      content={!canEdit ? "Enable edit mode" : "Disable edit mode"}
    />
  );
}
