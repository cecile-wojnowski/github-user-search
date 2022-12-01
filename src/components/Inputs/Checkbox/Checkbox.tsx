import React, { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  // @ts-ignore
  const { dispatch } = useContext(GithubSearchContext);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
      dispatch({ type: "increment" });
    }
  }, [checked, dispatch]);

  return <input type="checkbox" checked={checked} onChange={handleChange} />;
}
