import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./containers/Home";
import MenuContainer from "./containers/MenuContainer";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import _ from "lodash";
import "./css/App.css";

class App extends Component {
  state = {
    menuArr: [],
    user: null
  };

  getMenuArr = async () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    const data = await fetch(`http://localhost:3001/api/menus`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    });
    const menuArr = await data.json();
    this.setState({
      menuArr
    });
  };

  submitAdminForm = async (e, obj) => {
    e.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt");
    const filtered = this.state.menuArr.find(menu => menu.day === obj.day);
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        menu: {
          dishes_attributes: obj.dishes
        }
      })
    };
    fetch(`http://localhost:3001/api/menus/${filtered.id}`, options).then(r =>
      r.json()
    );

    window.location.reload();
    this.props.history.push("/menu");
  };

  getToken = (e, obj) => {
    e.preventDefault();
    this.login(obj);
    this.props.history.push("/");
  };

  login = obj => {
    fetch(`http://localhost:3001/api/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        auth: {
          email: obj.auth.email,
          password: obj.auth.password
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("jwt", data.jwt);
        this.setState({
          token: data.jwt
        });
      });
  };

  getData = () => {
    // console.log(token);
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch("http://localhost:3001/api/users/current", {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(user => this.setState({ user }));
  };

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.getData();
      this.getMenuArr();
    } else {
      this.props.history.push("/login");
    }
  }

  handleOrderNow = e => {
    // window.location.reload();
    window.scrollTo({ top: 0 });
    _.debounce(this.props.history.push("/menu"), 800);
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
                <Route
                  exact
                  path="/login"
                  render={() => <Login getToken={this.getToken} />}
                />
                <Route exact path="/logout" render={() => <Logout />} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
