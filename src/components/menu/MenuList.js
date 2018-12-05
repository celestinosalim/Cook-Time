import React, { Component } from "react";
import MenuCard from "./MenuCard";

class MenuList extends Component {
  getData = () => {
    if (this.props.token) {
      fetch("http://localhost:3001/api/menus", {
        method: "GET",
        headers: {
          Authorization: this.props.token
        }
      })
        .then(resp => resp.json())
        .then(data => localStorage.setItem("jwt", data.jwt));
    }
  };

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
