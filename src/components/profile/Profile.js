import React, { Component } from "react";

class Profile extends Component {
  state = {};

  render() {
    console.log(this.props.user);
    let { user } = this.props;

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {this.props.user ? (
          <h1 onClick={e => this.props.handleProfileClick(e)}>
            {this.props.user.username}
          </h1>
        ) : null}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Profile;
