import React, { Component } from "react";
import "./chelsey.css";
import chelsey from "../static/chelsey.jpg";
import ChelseyInfo from "./chelseyinfo.js";

export default class Chelsey extends Component {
  render() {
    return (
      <div className="chelsey">
        <img className="chelsey-photo" src={chelsey} alt="chelsey" />
        <ChelseyInfo />
      </div>
    );
  }
}
