import { Dispatch, SetStateAction } from "react";

export type User = unknown & {
  id: number;
  duplicatedId?: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type UsersListState = {
  selectedCards: number;
  users: User[];
  usersChecked: number[]; // only store the users id
  allChecked: boolean | null;
};
export type InputValue = string | null;

export interface GithubSearchContextType {
  state: UsersListState;
  dispatch: Dispatch<any>; // could be improved
  canEdit: boolean;
  setCanEdit: Dispatch<SetStateAction<boolean>>;
  inputValue: InputValue;
  setInputValue: Dispatch<SetStateAction<InputValue>>;
  isMobile: boolean;
}

export type GithubSearchProviderProps = {
  children: JSX.Element | JSX.Element[];
};
