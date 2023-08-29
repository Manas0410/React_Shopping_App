import React from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haserror: false,
      error: undefined,
    };
  }
  static getDerivedStateFromError(error) {
    return { haserror: true, error: error };
  }
  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    if (this.state.haserror) {
      return (
        <div>
          <h1>OOps!!! some error occured</h1>
          <Link to={`/`}>
            <button>HOME</button>{" "}
          </Link>
        </div>
      );
    } else {
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  }
}
