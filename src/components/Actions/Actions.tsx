import React, { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import IconButton from "components/Buttons/IconButton";

type ActionsProps = {
  icons: string[];
};
export default function Actions({ icons }: ActionsProps) {
  // @ts-ignore
  const { dispatch } = useContext(GithubSearchContext);

  return (
    <Box>
      {icons?.map((icon: string, index: number) => (
        <IconButton
          key={index}
          onClick={() => dispatch({ type: icon })}
          icon={icon}
        />
      ))}
    </Box>
  );
}
