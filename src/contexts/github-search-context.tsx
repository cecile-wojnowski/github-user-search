import React, { createContext, useState, useReducer, useEffect } from "react";

import useMediaQuery from "hooks/useMediaQuery";

export const GithubSearchContext = createContext("");

type GithubSearchProviderProps = { children: JSX.Element | JSX.Element[] };

const initialState = {
  selectedCards: 0,
  users: [],
  usersChecked: [],
  allChecked: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      // Used to store the fetched data
      return { ...state, users: action.payload };

    case "addChecked":
      return {
        ...state,
        selectedCards: state.selectedCards + 1,
        usersChecked: [...state.usersChecked, action.payload],
      };

    case "removeChecked":
      const removedChecked = state.usersChecked.filter(
        (id: number) => id !== action.payload
      );
      return {
        ...state,
        usersChecked: removedChecked,
        selectedCards: state.selectedCards - 1,
      };

    case "duplicate":
      const duplicatedUsers = state.usersChecked?.map((element: any) => {
        const user = state?.users.filter((user: any) => element === user.id);
        return user[0];
      });

      return {
        ...state,
        users: [...state.users, ...duplicatedUsers],
      };

    case "delete":
      // Delete one or more specified users
      const uncheckedUsers = state.users.filter(
        (user: any) => !state.usersChecked.includes(user.id)
      );

      return {
        users: uncheckedUsers,
        usersChecked: [],
        selectedCards: 0,
        allChecked: false,
      };

    case "checkAll":
      const usersId = state.users.map((user: any) => user.id);

      return {
        ...state,
        selectedCards: !state.allChecked ? state.users.length : 0,
        allChecked: !state.allChecked,
        usersChecked: !state.allChecked ? usersId : [],
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
  const [inputValue, setInputValue] = useState(null);
  const [isMobile, setIsMobile] = useState(true); // Used to render differents styles depending on the screen's size

  const isMobileWidth = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    setIsMobile(isMobileWidth);
  }, [isMobileWidth]);

  return (
    <GithubSearchContext.Provider
      // @ts-ignore
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
