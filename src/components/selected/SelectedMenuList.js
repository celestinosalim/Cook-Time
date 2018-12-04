import React, { Component } from "react";
import SelectedMenuCard from "./SelectedMenuCard";

class SelectedMenuList extends Component {
  getDishesToCard = () => {
    return this.props.menu.dishes.map(dish => (
      <SelectedMenuCard
        dish={dish}
        key={dish.id}
        handleDishClick={this.props.handleDishClick}
      />
    ));
  };

  render() {
    console.log(this.props);

    return (
      <div className="ui divided three column grid">
        {this.getDishesToCard()}
      </div>
    );
  }
}

export default SelectedMenuList;
