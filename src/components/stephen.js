import React, { Component } from "react";
import "./stephen.css";
import stephen from "../static/stephen.jpg";
import StephenInfo from "./stepheninfo.js";
export default class Stephen extends Component {
  render() {
    return (
      <div className="stephen">
        <img className="stephen-photo" src={stephen} alt="stephen" />
        <StephenInfo />
      </div>
    );
  }
}
