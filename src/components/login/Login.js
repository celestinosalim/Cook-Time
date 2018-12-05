import React, { Component } from "react";

class Login extends Component {
  state = {
    auth: { email: "", password: "" }
  };

  handleChange = e => {
    this.setState({
      auth: { ...this.state.auth, [e.target.name]: e.target.value }
    });
  };

  render() {
    // console.log(this.state);

    return (
      <form onSubmit={e => this.props.getToken(e, this.state)}>
        <br />
        <br />
        <br />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="email"
          value={this.state.auth.email}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          name="password"
          type="password"
          value={this.state.auth.password}
          onChange={this.handleChange}
        />
        <input type="submit" name="Submit" />
      </form>
    );
  }
}

export default Login;
