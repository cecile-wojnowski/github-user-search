import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import { UsersListProps } from "./UsersList.types";
import useFetch from "hooks/useFetch";
import isEmpty from "functions/isEmpty";
import style from "views/GithubSearch/UsersList/style";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";

/**
 * A scrollable container with the list of cards users
 * @param {Object} users Array of users with their infos
 * @returns
 */
export default function UsersList({ url }: UsersListProps) {
  // @ts-ignore
  const { isMobile, state, inputValue } = useContext(GithubSearchContext);
  const { isLoading, errorMessage } = useFetch(url, "GET");

  const hasNoResult = inputValue && isEmpty(state.users);

  return (
    <>
      {errorMessage ? errorMessage : <></>}
      {isLoading ? (
        <p>Loading...</p>
      ) : hasNoResult ? (
        <Typography content="No user found" />
      ) : (
        <Box
          style={{ ...style, justifyContent: isMobile ? "center" : "start" }}
        >
          {!isEmpty(state.users) ? ( // Make sure to not map on an empty array
            state.users.map((user: any) => (
              <Card
                key={user?.duplicatedId ? user?.duplicatedId : user.id}
                id={user?.duplicatedId ? user?.duplicatedId : user.id}
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
