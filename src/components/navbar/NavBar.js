import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const navStyle = {
      backgroundColor: "rgb(121, 165, 64)",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: "500"
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-fixed-bottom"
        style={navStyle}
      >
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                About
              </a>
            </li>
            <li className="nav-item ">
              {localStorage.getItem("jwt") ? null : (
                <a className="nav-link" href="/login">
                  Log in
                </a>
              )}
            </li>
          </ul>
          {this.props.user && (
            <a href="/profile">
              <button className="btn btn-info">
                Logged in as: {this.props.user.username}
              </button>
            </a>
          )}
          {localStorage.getItem("jwt") ? (
            <a href="/logout">
              <button className="btn btn-danger">Log Out</button>
            </a>
          ) : null}

          <i className="big facebook icon" />
          <i className="big instagram icon" />
          <i className="big twitter icon" />
          <i
            className="big shopping cart icon"
            onClick={() => console.log("clicked")}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
