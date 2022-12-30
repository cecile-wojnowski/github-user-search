import React, { createContext, useState, useReducer } from "react";

export const GithubSearchContext = createContext("");

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
        usersChecked: action.payload,
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
      const removedUsers = state.users?.filter(
        (user: any) => !state.usersChecked.includes(user.id)
      );

      return {
        ...state,
        users: removedUsers,
        usersChecked: [],
        selectedCards: 0,
      };

    case "checkAll":
      return {
        ...state,
        selectedCards: !state.allChecked ? state.users.length : 0,
        allChecked: !state.allChecked,
      };

    default:
      throw new Error();
  }
}

export default function GithubSearchProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [canEdit, setCanEdit] = useState(true);

  return (
    <GithubSearchContext.Provider
      // @ts-ignore
      value={{ state, dispatch, canEdit, setCanEdit }}
    >
      {children}
    </GithubSearchContext.Provider>
  );
}
