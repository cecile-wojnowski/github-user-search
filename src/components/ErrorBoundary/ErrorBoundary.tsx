import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    // @ts-ignore
    return this.props.children;
  }
}
