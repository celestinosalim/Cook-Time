import React, { Component } from "react";
import MenuList from "../components/menu/MenuList";
import MenuSelected from "../components/selected/MenuSelected";
import "./css/display.css";

class MenuContainer extends Component {
  state = {
    selectedDay: null,
    clicked: false
  };

  handleDayClick = (e, obj) => {
    this.setState({
      selectedDay: obj,
      clicked: !this.state.clicked
    });
  };

  getSelectedDay = () => {
    if (this.state.selectedDay) {
      return <MenuSelected menu={this.state.selectedDay} />;
    }
  };

  getMenuList = () => {
    return (
      <MenuList menus={this.props.menus} handleDayClick={this.handleDayClick} />
    );
  };

  render() {
    // console.log(this.props);

    return (
      <div id="Menu">
        {this.state.clicked === false
          ? this.getMenuList()
          : this.getSelectedDay()}
      </div>
    );
  }
}

export default MenuContainer;
