import React from "react";

import ErrorBoundary from "components/ErrorBoundary";

import GithubSearch from "views/GithubSearch";
// Ici on peut faire passer les providers
export default function App() {
  return (
    <ErrorBoundary>
      <GithubSearch />
    </ErrorBoundary>
  );
}
