import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";

class MenuCard extends Component {
  render() {
    // console.log(this.props);

    const style = {
      paddingTop: "0px"
    };

    let { day, image } = this.props.menu;
    let { menu } = this.props;

    return (
      <div className="Card" style={style}>
        <div onClick={e => this.props.handleDayClick(e, menu)}>
          <NewsHeaderCard title={day} thumbnail={image} />
        </div>
      </div>
    );
  }
}

export default MenuCard;
