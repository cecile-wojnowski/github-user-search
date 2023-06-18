import { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import style from "components/Inputs/SearchInput/style";
import Box from "components/Containers/Box";
import { GithubSearchContextType } from "contexts/github-search-context.types";

export default function SearchInput() {
  const { isMobile, inputValue, setInputValue } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  function handleChange(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <Box style={{ justifyContent: "center", marginBottom: "2%" }}>
      <input
        value={inputValue ? inputValue : ""}
        onChange={handleChange}
        style={{ ...style, width: isMobile ? "100%" : "30%" }}
        type="text"
        placeholder="Search users"
        name="search_input"
      />
    </Box>
  );
}
