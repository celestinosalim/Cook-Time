import React, { Component } from "react";
import MenuCard from "./MenuCard";

class MenuList extends Component {
  getMenusToCard = () => {
    return this.props.menus.map(menu => (
      <MenuCard
        menu={menu}
        key={menu.day}
        handleDayClick={this.props.handleDayClick}
      />
    ));
  };

  render() {
    return (
      <div className="ui divided three column grid">
        {this.getMenusToCard()}
      </div>
    );
  }
}

export default MenuList;
