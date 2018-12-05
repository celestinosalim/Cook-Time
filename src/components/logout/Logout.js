import React, { Component } from "react";

class Logout extends Component {
  render() {
    return <div>{localStorage.clear()}</div>;
  }
}

export default Logout;
