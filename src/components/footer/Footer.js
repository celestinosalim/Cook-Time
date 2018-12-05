import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";

class Footer extends Component {
  state = {};
  render() {
    return (
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "rgb(121, 165, 64)",
          padding: "5rem",
          textAlign: "center"
        }}
        stickyStyles={{
          backgroundColor: "rgba(121, 165, 64)",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <div>
          <i className="big facebook icon" />
          <i className="big instagram icon" />
          <i className="big twitter icon" />
        </div>
        <br />
        <div>
          <h3>© 2018 CookTime by: Celestino Salim</h3>
        </div>
      </StickyFooter>
    );
  }
}

export default Footer;
