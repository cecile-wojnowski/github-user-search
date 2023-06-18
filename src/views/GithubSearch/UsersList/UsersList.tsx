import { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import { UsersListProps } from "./UsersList.types";
import useFetch from "hooks/useFetch";
import isEmpty from "functions/isEmpty";
import style from "views/GithubSearch/UsersList/style";

import Box from "components/Containers/Box";
import Card from "components/Card";
import Typography from "components/Typography";
import {
  GithubSearchContextType,
  User,
} from "contexts/github-search-context.types";

/**
 * A scrollable container with the list of cards users
 * @param url updated with the input value after a delay to avoid successive requests
 * @returns a list of cards
 */

export default function UsersList({ url }: UsersListProps) {
  const { isMobile, state, inputValue } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;
  const { users } = state;
  const { isLoading, errorMessage } = useFetch(url, "GET");

  const hasNoResult = inputValue && isEmpty(users);
  // TODO : fix => since we are using a delay, hasNoResult needs to be true AFTER the query is done

  return (
    <>
      {errorMessage ? errorMessage : <></>}
      {isLoading ? (
        <p>Loading...</p>
      ) : !errorMessage && hasNoResult ? (
        <Typography content="No user found" />
      ) : (
        <Box
          style={{ ...style, justifyContent: isMobile ? "center" : "start" }}
          dataTestid="UsersList"
        >
          {!isEmpty(users) ? ( // Make sure to not map on an empty array
            users.map((user: User, index: number) => (
              <Card
                key={"duplicatedId" in user ? user?.duplicatedId : user.id}
                id={user.id}
                duplicatedId={user?.duplicatedId}
                login={user.login}
                imageUrl={user.avatar_url}
                profileUrl={user.html_url}
                dataTestid={`Card${index + 1}`}
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
