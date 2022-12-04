import React, { createContext, useState, useReducer } from "react";

export const GithubSearchContext = createContext("");

const initialState = { selectedCards: 0, users: [], usersChecked: [] };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { ...state, selectedCards: state.selectedCards + 1 };
    case "decrement":
      return { ...state, selectedCards: state.selectedCards - 1 };

    case "add":
      return { ...state, users: action.payload };

    case "addChecked":
      return { ...state, usersChecked: action.payload };

    case "removeChecked":
      const removedChecked = state.usersChecked.filter(
        // @ts-ignore
        (id, i) =>
          // @ts-ignore
          state.usersChecked.findLastIndex((x) => x === id) === i
      );

      return { ...state, usersChecked: removedChecked };

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

      return { ...state, users: removedUsers, usersChecked: [] };

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
