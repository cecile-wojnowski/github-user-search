import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import fetchData from "functions/fetchData";
import { actions } from "constants/constants";
import { routes } from "constants/routes";

import Header from "components/Header";
import UsersList from "views/GithubSearch/UsersList";

import Checkbox from "components/Inputs/Checkbox";
import SearchInput from "components/Inputs/SearchInput";
import Typography from "components/Typography";

import Actions from "components/Actions";

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // @ts-ignore
  const { state, dispatch, canEdit, setCanEdit } =
    useContext(GithubSearchContext);

  // TODO : handle the message of the empty page at the beginning
  // and the results of the empty field when input value is erased

  useEffect(() => {
    if (inputValue) {
      fetchData(
        `${routes.GITHUB_USERS_SEARCH}${inputValue}${routes.GITHUB_USERS_SEARCH_PARAMS}`,
        "GET"
      ).then((data) => {
        console.log("data", data);
        if (data.hasOwnProperty("message")) {
          setErrorMessage(data.message);
        } else {
          dispatch({ type: "add", payload: data.items });
        }
      });
    }
  }, [inputValue, dispatch]);

  return (
    <>
      <Header />

      <p>{canEdit ? "Edit mode" : "Read Only"}</p>
      <button onClick={() => setCanEdit(!canEdit)}>Edit</button>
      {canEdit ? (
        <>
          <Checkbox />
          <Typography content={`${state.selectedCards} elements selected`} />
        </>
      ) : null}
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <Actions icons={actions} />
      {!errorMessage ? <UsersList users={state.users} /> : errorMessage}
    </>
  );
}
