import React from "react";

import style from "components/Inputs/SearchInput/style";
import Box from "components/Containers/Box";

export default function SearchInput({ inputValue, setInputValue }: any) {
  function handleChange(event: any) {
    setInputValue(event.target.value);
  }
  return (
    <form>
      <Box justifyContent="center">
        <input
          value={inputValue}
          onChange={handleChange}
          style={style}
          type="text"
          placeholder="Search users"
        />
      </Box>
    </form>
  );
}
