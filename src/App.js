import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./containers/Home";
import MenuContainer from "./containers/MenuContainer";
import Footer from "./footer/Footer";
import Form from "./components/form/Form";
import "./css/App.css";

class App extends Component {
  state = {
    menuArr: []
  };

  getMenuArr = async () => {
    const data = await fetch(`http://localhost:3001/api/menus`);
    const menuArr = await data.json();
    this.setState({
      menuArr
    });
  };

  submitAdminForm = async (e, obj) => {
    e.preventDefault();

    const filtered = this.state.menuArr.find(menu => menu.day === obj.day);
    console.log(obj);

    let options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        menu: {
          dishes_attributes: {
            id: 10,
            name: obj.dishes[0].name,
            description: obj.dishes[0].description
          }
        }
      })
    };

    const data = await fetch(
      `http://localhost:3001/api/menus/${filtered.id}`,
      options
    );
    const patching = await data.json();
    console.log(patching);
  };

  componentDidMount() {
    this.getMenuArr();
  }

  handleOrderNow = e => {
    console.log("this is to order now");
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <NavBar />
        <div>
          <div>
            <div>
              <Route
                exact
                path="/"
                render={() => <Home handleOrderNow={this.handleOrderNow} />}
              />
              <Route
                exact
                path="/menu"
                render={() => <MenuContainer menus={this.state.menuArr} />}
              />
              <Route
                exact
                path="/contact"
                render={() => <h2> hello from contact</h2>}
              />
              <div>
                <Route
                  exact
                  path="/update-menu"
                  render={() => <Form submitAdminForm={this.submitAdminForm} />}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
