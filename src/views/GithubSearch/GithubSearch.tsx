import { useState, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import { actions } from "constants/constants";
import { routes } from "constants/routes";

import Box from "components/Containers/Box";
import Header from "components/Header";
import Container from "components/Containers/Container";
import UsersList from "views/GithubSearch/UsersList/UsersList";
import SelectedElements from "views/GithubSearch/SelectedElements/SelectedElements";
import SearchInput from "components/Inputs/SearchInput";
import EditButton from "views/GithubSearch/EditButton";
import Actions from "components/Actions";
import { GithubSearchContextType } from "contexts/github-search-context.types";

export default function GithubSearch() {
  const [url, setUrl] = useState("");

  const { isMobile, canEdit, inputValue } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  if (inputValue) {
    setTimeout(() => {
      // used as a simple way of debouncing, as we fetch the data when the url changes
      // inputValue is updated and stored when the user types, but the request waits
      // but to be reusable in other contexts a function should be added
      setUrl(
        `${routes.GITHUB_USERS_SEARCH}${inputValue}${routes.GITHUB_USERS_SEARCH_PARAMS}`
      );
    }, 1000);
  }

  return (
    <>
      <Header content="Github search" />
      <Container>
        {!isMobile ? <EditButton /> : <></>}
        <SearchInput />
        {canEdit ? (
          <Box
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SelectedElements />
            <Actions icons={actions} />
          </Box>
        ) : (
          <></>
        )}

        <UsersList url={url} />

        {isMobile ? (
          <Box style={{ justifyContent: "center", marginTop: "20%" }}>
            <EditButton />
          </Box>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
