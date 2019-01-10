import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./containers/Home";
import MenuContainer from "./containers/MenuContainer";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Profile from "./components/profile/Profile";
import AboutForm from "./components/about/AboutForm";
import swal from "sweetalert";
import "./css/App.css";

class App extends Component {
  state = {
    menuArr: [],
    user: null,
    token: null
  };

  getToken = async (e, obj) => {
    e.preventDefault();
    await this.login(obj);
    await this.props.history.push("/profile");
  };

  register = async (e, obj) => {
    e.preventDefault();

    fetch(`https://cook-time-api.herokuapp.com/api/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: obj.auth.register_email,
          password: obj.auth.register_password,
          username: obj.auth.username,
          avatar: obj.auth.avatar
        }
      })
    }).then(() => this.loginAfterSignUp(obj));

    await this.props.history.push("/profile");
  };

  login = obj => {
    fetch(`https://cook-time-api.herokuapp.com/api/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
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
      })
      .catch(error => {
        swal("INVALID USER");
        return this.props.history.push("/login");
      });
  };

  loginAfterSignUp = obj => {
    fetch(`https://cook-time-api.herokuapp.com/api/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
        auth: {
          email: obj.auth.register_email,
          password: obj.auth.register_password
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("jwt", data.jwt);
        if (this.state.token === null) {
          this.setState({
            token: data.jwt
          });
        }
      })
      .catch(error => {
        swal("INVALID USER");
        return this.props.history.push("/login");
      });
  };

  getUserData = () => {
    // console.log(token);
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch("https://cook-time-api.herokuapp.com/api/users/current", {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(user => this.setState({ user }));
  };

  getMenuArr = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch(`https://cook-time-api.herokuapp.com/api/menus`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(menuArr =>
        this.setState({
          menuArr: menuArr
        })
      );
  };

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.getUserData();
      this.getMenuArr();
    } else {
      this.props.history.push("/login");
    }
  }

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
    fetch(
      `https://cook-time-api.herokuapp.com/api/menus/${filtered.id}`,
      options
    ).then(r => r.json());

    window.location.reload();
    this.props.history.push("/menu");
  };

  handleOrderNow = async e => {
    // window.location.reload();
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (this.state.user) {
      await setTimeout(() => this.props.history.push("/menu"), 1500);
    }
  };

  handleProfileClick = () => {
    this.props.history.push("/");
  };

  componentDidUpdate() {
    if (this.state.token) {
      window.location.reload();
    }
  }

  backToHomePage = async () => {
    await setTimeout(() => this.props.history.push("/"), 10000);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar user={this.state.user} />
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
                  render={() => (
                    <Login getToken={this.getToken} register={this.register} />
                  )}
                />
                <Route exact path="/logout" render={() => <Logout />} />
                <Route
                  exact
                  path="/profile"
                  render={() => (
                    <Profile
                      user={this.state.user}
                      handleProfileClick={this.handleProfileClick}
                      backToHomePage={this.backToHomePage}
                    />
                  )}
                />

                <Route exact path="/contact" render={() => <AboutForm />} />
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
