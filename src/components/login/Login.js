import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    auth: {
      email: "",
      password: "",
      avatar: "",
      username: "",
      register_email: "",
      register_password: ""
    }
  };

  handleChange = e => {
    this.setState({
      auth: { ...this.state.auth, [e.target.name]: e.target.value }
    });
  };

  render() {
    // console.log(this.state);

    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={e => this.props.getToken(e, this.state)}>
            <input
              className="form-item"
              placeholder="Email..."
              name="email"
              type="email"
              value={this.state.auth.email}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password..."
              name="password"
              type="password"
              value={this.state.auth.password}
              onChange={this.handleChange}
            />
            <input type="submit" name="Submit" className="form-submit" />
          </form>
        </div>
        {/*
        STARTS SIGN UP FORM
        */}
        <div className="card">
          <h1>Sign Up</h1>
          <form onSubmit={e => this.props.register(e, this.state)}>
            <input
              className="form-item"
              placeholder="Username..."
              name="username"
              type="username"
              value={this.state.auth.username}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Email..."
              name="register_email"
              type="email"
              value={this.state.auth.register_email}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password..."
              name="register_password"
              type="password"
              value={this.state.auth.register_password}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Avatar..."
              name="avatar"
              type="avatar"
              value={this.state.auth.avatar}
              onChange={this.handleChange}
            />
            <input type="submit" name="Submit" className="form-submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
