import React, { useState, useContext, useEffect } from "react";

import "./style.css";
import { CheckboxProps } from "./Checkbox.types";

import { GithubSearchContext } from "contexts/github-search-context";

export default function Checkbox({
  onClick,
  userId,
  dataTestid,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  // @ts-ignore
  const { state, dispatch } = useContext(GithubSearchContext);

  const handleChange = () => {
    if (!checked) {
      dispatch({
        type: "addChecked",
        payload: userId,
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
    if (!state?.usersChecked.includes(userId)) {
      setChecked(false);
    }
  }, [state?.usersChecked, userId]);

  useEffect(() => {
    if (state?.allChecked) {
      setChecked(true);
    } else if (state?.allChecked === false) {
      setChecked(false);
    }
  }, [state?.allChecked]);

  return (
    <div className="checkbox-wrapper">
      <input
        className={checked ? "checked" : ""}
        type="checkbox"
        checked={checked}
        onChange={onClick ? onClick : handleChange}
        data-testid={dataTestid ? dataTestid : "Checkbox"}
      />
    </div>
  );
}
