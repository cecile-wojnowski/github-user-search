import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import isEmpty from "functions/isEmpty";
import { actions } from "constants/constants";
import { routes } from "constants/routes";

import Box from "components/Containers/Box";
import Header from "components/Header";
import Container from "components/Containers/Container";
import UsersList from "views/GithubSearch/UsersList/UsersList";
import SelectedElements from "views/GithubSearch/SelectedElements/SelectedElements";
import SearchInput from "components/Inputs/SearchInput";
import EditButton from "views/GithubSearch/EditButton";
import Typography from "components/Typography";
import Actions from "components/Actions";

export default function GithubSearch() {
  const [url, setUrl] = useState("");

  // @ts-ignore
  const { isMobile, state, canEdit, dispatch, inputValue, setInputValue } =
    useContext(GithubSearchContext);
  const hasNoResult = isEmpty(state.users) && inputValue;

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
        {!isMobile ? <EditButton /> : null}
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
        {canEdit ? (
          <Box
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SelectedElements />
            <Actions icons={actions} />
          </Box>
        ) : null}
        {hasNoResult ? <Typography content="No user found" /> : null}
        <UsersList users={state.users} url={url} />

        {isMobile ? (
          <Box style={{ justifyContent: "center", marginTop: "20%" }}>
            <EditButton />
          </Box>
        ) : null}
      </Container>
    </>
  );
}
