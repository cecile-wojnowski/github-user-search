import React, { useState, useContext, useEffect } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

export default function Checkbox({ userId }: any) {
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
    }

    setChecked(!checked);
  };

  useEffect(() => {
    if (state.usersChecked.includes(userId)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [state.usersChecked, userId]);

  return <input type="checkbox" checked={checked} onChange={handleChange} />;
}
