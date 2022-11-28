import React, { useState, useEffect } from "react";

import Header from "components/Header";
import Box from "components/Containers/Box";
import SearchInput from "components/Inputs/SearchInput";
import Card from "components/Card";

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState("tom");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.items));
  }, [inputValue]);

  return (
    <>
      <Header />
      <SearchInput setInputValue={setInputValue} />
      <Box grid center>
        {users.map((user: any) => (
          <Card user={user} />
        ))}
      </Box>
    </>
  );
}
