import React, { useState, useEffect, useContext } from "react";

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

export default function GithubSearch() {
  const [url, setUrl] = useState("");

  // @ts-ignore
  const { isMobile, canEdit, dispatch, inputValue } =
    useContext(GithubSearchContext);

  useEffect(() => {
    if (inputValue) {
      setUrl(
        `${routes.GITHUB_USERS_SEARCH}${inputValue}${routes.GITHUB_USERS_SEARCH_PARAMS}`
      );
    }
  }, [inputValue, dispatch]);

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
