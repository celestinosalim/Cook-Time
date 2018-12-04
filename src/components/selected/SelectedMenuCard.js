import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";

class SelectedMenuCard extends Component {
  state = {};

  render() {
    console.log(this.props);
    let { name, image } = this.props.dish;
    return (
      <div className="Card">
        <div onClick={e => this.props.handleDishClick(e, this.props.dish)}>
          <NewsHeaderCard title={name} thumbnail={image} />
        </div>
      </div>
    );
  }
}

export default SelectedMenuCard;
