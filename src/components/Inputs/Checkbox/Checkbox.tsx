import React, { useState, useContext, useEffect } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

export default function Checkbox({ onClick, userId }: any) {
  const [checked, setChecked] = useState(false);

  // @ts-ignore
  const { state, dispatch } = useContext(GithubSearchContext);

  const handleChange = () => {
    if (!checked) {
      dispatch({ type: "increment" });
      dispatch({
        type: "addChecked",
        payload: [...state.usersChecked, userId],
      });
    } else if (state.selectedCards !== 0 && checked) {
      dispatch({ type: "decrement" });
      dispatch({
        type: "removeChecked",
        payload: userId,
      });
      setChecked(false);
    }

    setChecked(!checked);
  };

  useEffect(() => {
    if (state?.allChecked) {
      setChecked(true);
    } else if (state?.allChecked === false) {
      setChecked(false);
    } else if (!state?.usersChecked.includes(userId)) {
      setChecked(false);
    }
  }, [checked, state?.usersChecked, state?.allChecked, userId]);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onClick ? onClick : handleChange}
    />
  );
}
