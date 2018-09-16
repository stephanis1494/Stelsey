import React, { Component } from "react";
import "./chelseyinfo.css";
import "./icon.css";
import facebook from "../static/facebook-icon.png";
import instagram from "../static/instagram-icon.png";
import twitter from "../static/twitter-icon.png";
import email from "../static/email-icon.png";
import camera from "../static/camera-icon.png";

export default class ChelseyInfo extends Component {
  render() {
    return (
      <div className="chelsey-info">
        <ul>
          <li>
            <a href="https://www.facebook.com/chelsey.fairris" target="_blank">
              <img className="icon" src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/chelseyrae__/" target="_blank">
              <img className="icon" src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/stelseygreater" target="_blank">
            <img className="icon" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/chelseyrae.photograpy" target="_blank">
              <img className="icon" src={camera} alt="photography" />
            </a>
          </li>
          <li>
            <a href="mailto:C.Fairris@gmail.com">
              <img className="icon" src={email} alt="email" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
