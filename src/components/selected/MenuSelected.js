import React, { Component } from "react";
import SelectedMenuList from "./SelectedMenuList";
import Details from "../details/Details";

class MenuSelected extends Component {
  state = {
    selectedDish: null,
    clicked: false
  };

  handleDishClick = (e, obj) => {
    this.setState({
      selectedDish: obj,
      clicked: !this.state.clicked
    });
  };

  getSelectedDish = () => {
    if (this.state.selectedDish) {
      return <Details menu={this.state.selectedDish} />;
    }
  };

  getSelectedMenuList = () => {
    return (
      <SelectedMenuList
        menu={this.props.menu}
        handleDishClick={this.handleDishClick}
      />
    );
  };

  render() {
    return (
      <div>
        {this.state.clicked === false
          ? this.getSelectedMenuList()
          : this.getSelectedDish()}
      </div>
    );
  }
}

export default MenuSelected;
