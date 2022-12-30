import React from "react";

import style from "components/Inputs/SearchInput/style";
import Box from "components/Containers/Box";

export default function SearchInput({ inputValue, setInputValue }: any) {
  function handleChange(event: any) {
    setInputValue(event.target.value);
  }
  return (
    <Box style={{ justifyContent: "center", marginBottom: "2%" }}>
      <input
        value={inputValue ? inputValue : ""}
        onChange={handleChange}
        style={style}
        type="text"
        placeholder="Search users"
      />
    </Box>
  );
}
