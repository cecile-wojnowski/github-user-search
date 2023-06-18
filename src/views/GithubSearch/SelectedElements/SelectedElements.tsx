import { useContext } from "react";

import style from "views/GithubSearch/SelectedElements/style";
import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import Checkbox from "components/Inputs/Checkbox";
import TextContent from "views/GithubSearch/SelectedElements/TextContent";
import { GithubSearchContextType } from "contexts/github-search-context.types";

/**
 * Used to check and uncheck all cards with a variable count and text
 * @returns Inline checkbox and text
 */
export default function SelectedElements() {
  const { state, dispatch } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  return (
    <Box style={style}>
      <Checkbox
        onClick={() => dispatch({ type: "checkAll" })}
        dataTestid="CheckAll"
      />
      <TextContent count={state.selectedCards} />
    </Box>
  );
}
