import React, { Component } from "react";
import "./details.css";
class Details extends Component {
  render() {
    console.log(this.props);
    let { menu } = this.props;

    return (
      <div className="ui grid container">
        <div>
          <h1 className="text_context">MEAL OF THE DAY</h1>
          <img src={menu.image} alt="Wow" className="image" />
          <h1 className="description">{menu.name}</h1>
          <h2 className="text_context">{menu.description}</h2>
        </div>
      </div>
    );
  }
}

export default Details;
