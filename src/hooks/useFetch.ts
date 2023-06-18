import { useState, useEffect, useContext } from "react";

import { GithubSearchContext } from "contexts/github-search-context";
import fetchData from "functions/fetchData";
import { GithubSearchContextType } from "contexts/github-search-context.types";

export default function useFetch(url: string, method: string) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(
    GithubSearchContext
  ) as GithubSearchContextType;

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      fetchData(url, method).then((data) => {
        if (data.hasOwnProperty("message")) {
          setErrorMessage(data.message);
        } else {
          dispatch({ type: "add", payload: data.items });
        }
        setIsLoading(false);
      });
    }
  }, [url, method, dispatch]);

  return { isLoading, errorMessage };
}
