import React, { Component } from "react";
import { UserCard } from "react-ui-cards";
import "./Profile.css";
class Profile extends Component {
  state = {};

  render() {
    return (
      <div id="leroy" className="ui grid">
        <div onClick={e => this.props.handleProfileClick(e)}>
          {this.props.user ? (
            <UserCard
              cardClass="profilePicture"
              header={`https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c6d163313b444a49f7ec591b920d252&w=1000&q=80`}
              avatar={this.props.user.avatar}
              name={this.props.user.username}
              positionName={this.props.user.role}
            />
          ) : null}
        </div>
        <div>
          {this.props.user && (
            <div className="WelcomeVisit">
              Welcome To Cook Time Inc Enjoy Your Visit
              <hr />
              {this.props.user.username}
              <hr />
              <img
                src="https://tul.imgix.net/content/article/10-things-foodies-do-that-are-super-annoying.jpg?auto=format,compress&w=740&h=486&fit=crop&crop=edges"
                alt=""
              />
            </div>
          )}
        </div>
        {setTimeout(() => this.props.backToHomePage(), 1500)}
      </div>
    );
  }
}

export default Profile;
