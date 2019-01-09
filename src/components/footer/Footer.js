import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";

class Footer extends Component {
  state = {};

  render() {
    return (
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "rgb(212, 240, 160)",
          padding: "5rem",
          textAlign: "center"
        }}
        stickyStyles={{
          backgroundColor: "rgba(212, 240, 160)",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <div>
          <a href="https://www.facebook.com/celestino.salim">
            <i className=" black circular big facebook icon iconColors" />
          </a>
          <a href="https://www.instagram.com/cooktimeinc/">
            <i className="black circular big instagram icon" />
          </a>
          <a href="https://github.com/celestinosalim">
            <i className="black circular big github icon" />
          </a>
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
