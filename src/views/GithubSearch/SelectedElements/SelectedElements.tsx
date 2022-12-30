import React, { useContext } from "react";

import style from "views/GithubSearch/SelectedElements/style";
import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import Checkbox from "components/Inputs/Checkbox";
import TextContent from "views/GithubSearch/SelectedElements/TextContent";

/**
 * Used to check and uncheck all cards with a variable count and text
 * @returns {JSX} Inline checkbox and text
 */
export default function SelectedElements() {
  // @ts-ignore
  const { state, dispatch } = useContext(GithubSearchContext);

  return (
    <Box style={style}>
      <Checkbox onClick={() => dispatch({ type: "checkAll" })} />
      <TextContent count={state.selectedCards} />
    </Box>
  );
}
