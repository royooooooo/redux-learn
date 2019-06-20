import React, { Component } from "react";

export default class ProfilePageCla extends Component<any, any> {
  showMessage = () => {
    alert("Followed" + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
