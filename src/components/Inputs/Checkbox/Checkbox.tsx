import React, { useState, useContext, useEffect } from "react";

import "./style.css";

import { GithubSearchContext } from "contexts/github-search-context";

export default function Checkbox({ onClick, userId }: any) {
  const [checked, setChecked] = useState(false);

  // @ts-ignore
  const { state, dispatch } = useContext(GithubSearchContext);

  const handleChange = () => {
    if (!checked) {
      dispatch({
        type: "addChecked",
        payload: [...state.usersChecked, userId],
      });
    } else if (state.selectedCards !== 0 && checked) {
      dispatch({
        type: "removeChecked",
        payload: userId,
      });
    }

    setChecked(!checked);
  };

  useEffect(() => {
    if (state.allChecked) {
      setChecked(true);
    } else if (state.allChecked === false) {
      // allChecked is false only when the selected All button is used
      setChecked(false);
    }
  }, [state.allChecked]);

  return (
    <div className="checkbox-wrapper">
      <input
        className={checked ? "checked" : ""}
        type="checkbox"
        checked={checked}
        onChange={onClick ? onClick : handleChange}
      />
    </div>
  );
}
