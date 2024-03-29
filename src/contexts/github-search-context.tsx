import React, { createContext, useState, useReducer, useEffect } from "react";
import {
  GithubSearchContextType,
  GithubSearchProviderProps,
  UsersListState,
  User,
  InputValue,
} from "./github-search-context.types";

import useMediaQuery from "hooks/useMediaQuery";
import { duplicateUsers } from "functions/duplicateUsers";

export const GithubSearchContext = createContext<
  GithubSearchContextType | string
>("");

const initialState = {
  selectedCards: 0,
  users: [],
  usersChecked: [],
  allChecked: null,
};

function reducer(state: UsersListState, action: any) {
  const { users, usersChecked, selectedCards, allChecked } = state;
  switch (action.type) {
    case "add":
      // Used to store the fetched data
      return { ...state, users: action.payload };

    case "addChecked":
      return {
        ...state,
        selectedCards: selectedCards + 1,
        usersChecked: [...usersChecked, action.payload],
      };

    case "removeChecked":
      const removedChecked = usersChecked.filter(
        (id: number) => id !== action.payload
      );
      return {
        ...state,
        usersChecked: removedChecked,
        selectedCards: selectedCards - 1,
      };

    case "duplicate":
      const duplicatedUsers = duplicateUsers(users, usersChecked);

      return {
        ...state,
        users: [...users, ...duplicatedUsers],
      };

    case "delete":
      // Delete one or more specified users
      const uncheckedUsers = users.filter((user: User) => {
        let isUnchecked;
        if ("duplicatedId" in user && user.duplicatedId) {
          isUnchecked = !usersChecked.includes(user.duplicatedId);
        } else {
          isUnchecked = !usersChecked.includes(user.id);
        }
        return isUnchecked;
      });

      return {
        users: uncheckedUsers,
        usersChecked: [],
        selectedCards: 0,
        allChecked: false,
      };

    case "checkAll":
      const usersId = users.map((user: User) => user.id);

      return {
        ...state,
        selectedCards: !allChecked ? users.length : 0,
        allChecked: !allChecked,
        usersChecked: !allChecked ? usersId : [],
      };

    default:
      throw new Error();
  }
}

export default function GithubSearchProvider({
  children,
}: GithubSearchProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [canEdit, setCanEdit] = useState(true);
  const [inputValue, setInputValue] = useState<InputValue>(null);
  const [isMobile, setIsMobile] = useState(true); // Used to render differents styles depending on the screen's size

  const isMobileWidth = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    setIsMobile(isMobileWidth);
  }, [isMobileWidth]);

  return (
    <GithubSearchContext.Provider
      value={{
        state,
        dispatch,
        canEdit,
        setCanEdit,
        inputValue,
        setInputValue,
        isMobile,
      }}
    >
      {children}
    </GithubSearchContext.Provider>
  );
}
