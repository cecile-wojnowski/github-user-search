import { useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";

import Box from "components/Containers/Box";
import IconButton from "components/Buttons/IconButton";
import { GithubSearchContextType } from "contexts/github-search-context.types";

type ActionsProps = {
  icons: string[];
};
export default function Actions({ icons }: ActionsProps) {
  const { dispatch, setInputValue } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  return (
    <Box>
      {icons?.map((icon: string) => (
        <IconButton
          key={icon}
          onClick={() => {
            if (icon === "delete") setInputValue("");
            dispatch({ type: icon });
          }}
          icon={icon}
        />
      ))}
    </Box>
  );
}
