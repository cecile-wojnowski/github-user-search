import React, { useState, useEffect } from "react";

import { TextContentProps } from "views/GithubSearch/SelectedElements/SelectedElements.types";

import Box from "components/Containers/Box";
import Typography from "components/Typography";

/**
 * Contains the number of selected cards with a specific style
 * And a changeable text depending on the number of selected cards
 * @param {number} count The number of selected cards
 * @returns {JSX}
 */
export default function TextContent({ count }: TextContentProps) {
  const [hasElement, setHasElement] = useState(false);

  useEffect(() => {
    count > 1 ? setHasElement(true) : setHasElement(false);
  }, [count]);

  return (
    <Box style={{ flexDirection: "row" }}>
      <Typography
        content={count}
        style={{ fontWeight: "bold", paddingRight: 2 }}
      />
      <Typography content={` element${hasElement ? "s" : ""} selected`} />
    </Box>
  );
}
