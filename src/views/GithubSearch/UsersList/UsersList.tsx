import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import useFetch from "hooks/useFetch";
import isEmpty from "functions/isEmpty";
import style from "views/GithubSearch/UsersList/style";

import Box from "components/Containers/Box";
import Card from "components/Card";

/**
 * A scrollable container with the list of cards users
 * @param {Object} users Array of users with their infos
 * @returns
 */
export default function UsersList({ users, url }: any) {
  // @ts-ignore
  const { isMobile } = useContext(GithubSearchContext);
  const { isLoading, errorMessage } = useFetch(url, "GET");
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        errorMessage
      ) : (
        <Box
          style={{ ...style, justifyContent: isMobile ? "center" : "start" }}
        >
          {!isEmpty(users) // Make sure to not map on an empty array
            ? users.map((user: any, index: number) => (
                <Card
                  key={user.id}
                  id={user.id}
                  login={user.login}
                  imageUrl={user.avatar_url}
                  profileUrl={user.html_url}
                />
              ))
            : null}
        </Box>
      )}
    </>
  );
}
