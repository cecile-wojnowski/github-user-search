import React from "react";

import GithubSearchProvider from "contexts/github-search-context";

import ErrorBoundary from "components/ErrorBoundary";
import GithubSearch from "views/GithubSearch";

export default function App() {
  return (
    <ErrorBoundary>
      <GithubSearchProvider>
        <GithubSearch />
      </GithubSearchProvider>
    </ErrorBoundary>
  );
}
