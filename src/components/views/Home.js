import React, { Component } from "react";
import stelsey from "../../static/stelsey.jpg";
import "./Home.css";
import Chelsey from "../chelsey.js";
import Stephen from "../stephen.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn
    }));
    console.log(this.state.toggleOn);
  }

  handleDrop() {
    if (this.state.toggleOn === true) {
      return (
        <div>
          <Chelsey />
          <Stephen />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="stelsey">
        <h1> Stelsey </h1>
        <br />
        <h3> August 26th, 2017</h3>
        <img
          className="stelsey-photo"
          src={stelsey}
          alt="stelsey"
          onClick={this.handleClick}
        />
        <span> {this.handleDrop()} </span>
      </div>
    );
  }
}

export default Home;
