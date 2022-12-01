import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import fetchData from "functions/fetchData";

import Header from "components/Header";
import UsersList from "views/GithubSearch/UsersList";

import Checkbox from "components/Inputs/Checkbox";
import SearchInput from "components/Inputs/SearchInput";
import Typography from "components/Typography";

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  // @ts-ignore
  const { state } = useContext(GithubSearchContext);

  // TODO : handle the message of the empty page at the beginning
  // and the results of the empty field when input value is erased

  useEffect(() => {
    if (inputValue) {
      fetchData(
        `https://api.github.com/search/users?q=${inputValue}`,
        "GET"
      ).then((data) => setUsers(data.items));
    }
  }, [inputValue]);

  return (
    <>
      <Header />
      <Checkbox />
      <Typography content={`${state.selectedCards} elements selected`} />
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <UsersList data={users} />
    </>
  );
}
