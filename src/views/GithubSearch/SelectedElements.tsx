import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Checkbox from "components/Inputs/Checkbox";
import Typography from "components/Typography";

export default function SelectedElements() {
  // @ts-ignore
  const { state, dispatch } = useContext(GithubSearchContext);

  return (
    <>
      <Checkbox onClick={() => dispatch({ type: "checkAll" })} />
      <Typography content={`${state.selectedCards} elements selected`} />
    </>
  );
}
