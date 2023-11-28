import React from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    if (!hasError) {
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }

    return (
      <div>
        <h1>OOps!!! some error occured</h1>
        <Link to={`/`}>
          <button>Go back to Home</button>{" "}
        </Link>
      </div>
    );
  }
}
