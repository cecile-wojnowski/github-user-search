import React, { createContext, useReducer } from "react";

export const GithubSearchContext = createContext("");

const initialState = { selectedCards: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { selectedCards: state.selectedCards + 1 };
    case "decrement":
      return { selectedCards: state.selectedCards - 1 };

    default:
      throw new Error();
  }
}

export default function GithubSearchProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // @ts-ignore
    <GithubSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubSearchContext.Provider>
  );
}
