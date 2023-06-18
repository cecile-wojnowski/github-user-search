import { useContext } from "react";

import theme from "styles/theme";
import style from "./style";
import { GithubSearchContext } from "contexts/github-search-context";

import Button from "components/Buttons/Button";
import { GithubSearchContextType } from "contexts/github-search-context.types";

/**
 * Enable edit mode with variable text and border color
 */

export default function EditButton() {
  const { canEdit, setCanEdit } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  return (
    <Button
      style={{
        ...style,
        borderColor: !canEdit ? theme.colors.green : theme.colors.red,
      }}
      onClick={() => setCanEdit(!canEdit)}
      content={!canEdit ? "Enable edit mode" : "Disable edit mode"}
      dataTestid="EditMode"
    />
  );
}
