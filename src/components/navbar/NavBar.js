import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    const navStyle = {
      backgroundColor: "rgb(212, 240, 160)",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: "500"
    };

    const logoStyle = {
      width: "40px",
      height: "40px"
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-fixed-bottom"
        style={navStyle}
      >
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" style={logoStyle} />
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

            {this.props.user && this.props.user.role === "admin" && (
              <a className="nav-link" href="/update-menu">
                Update Menu
              </a>
            )}
            {/* <a className="nav-link" href="/contact">
              Contact Us
            </a> */}
          </ul>

          {this.props.user && (
            <a href="/profile">
              <button className="btn btn-primary">
                Profile: {this.props.user.username}
              </button>
            </a>
          )}
          {localStorage.getItem("jwt") ? (
            <a href="/logout">
              <button className="btn btn-secondary">Log Out</button>
            </a>
          ) : null}

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
