import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import useFetch from "hooks/useFetch";
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
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");

  // @ts-ignore
  const { state, canEdit } = useContext(GithubSearchContext);

  // TODO : handle the message of the empty page at the beginning
  // and the results of the empty field when input value is erased
  useEffect(() => {
    if (inputValue) {
      setUrl(
        `${routes.GITHUB_USERS_SEARCH}${inputValue}${routes.GITHUB_USERS_SEARCH_PARAMS}`
      );
    }
  }, [inputValue]);

  const { isLoading, errorMessage } = useFetch(url, "GET");

  return (
    <>
      <Header content="Github search" />
      <Container>
        <EditButton />
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
        {canEdit ? (
          <Box
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SelectedElements /> <Actions icons={actions} />
          </Box>
        ) : null}

        {isLoading ? (
          <p>Loading...</p>
        ) : !errorMessage ? (
          <UsersList users={state.users} />
        ) : (
          errorMessage
        )}
      </Container>
    </>
  );
}
