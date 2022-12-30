import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import useFetch from "hooks/useFetch";
import { actions } from "constants/constants";
import { routes } from "constants/routes";

import Header from "components/Header";
import Container from "components/Containers/Container";
import UsersList from "views/GithubSearch/UsersList";
import SelectedElements from "./SelectedElements";
import SearchInput from "components/Inputs/SearchInput";

import Actions from "components/Actions";

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");

  // @ts-ignore
  const { state, canEdit, setCanEdit } = useContext(GithubSearchContext);

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
        <p>{canEdit ? "Edit mode" : "Read Only"}</p>
        <button onClick={() => setCanEdit(!canEdit)}>Edit</button>
        {canEdit ? <SelectedElements /> : null}
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
        {canEdit ? <Actions icons={actions} /> : null}

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
