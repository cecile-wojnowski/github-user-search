import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import { UsersListProps } from "./UsersList.types";
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
export default function UsersList({ url }: UsersListProps) {
  // @ts-ignore
  const { isMobile, state } = useContext(GithubSearchContext);
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
          {!isEmpty(state.users) ? ( // Make sure to not map on an empty array
            state.users.map((user: any) => (
              <Card
                key={user.id}
                id={user.id}
                login={user.login}
                imageUrl={user.avatar_url}
                profileUrl={user.html_url}
              />
            ))
          ) : (
            <></>
          )}
        </Box>
      )}
    </>
  );
}
