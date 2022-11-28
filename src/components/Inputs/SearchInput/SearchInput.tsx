import React from "react";

import Box from "components/Containers/Box";

const style = {
  backgroundColor: "lightgrey",
  border: "none",
  borderRadius: "8px",
  height: "2.5rem",
  padding: "1%",
  width: "30%",
  fontSize: "20px",
};
export default function SearchInput({ setInputValue }: any) {
  return (
    <Box justifyContent="center">
      <input style={style} type="text" />
    </Box>
  );
}
