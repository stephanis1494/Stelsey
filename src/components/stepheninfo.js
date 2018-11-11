import React, { Component } from "react"
import "./stepheninfo.css"
import "./icon.css"
import facebook from "../static/facebook-icon.png"
import instagram from "../static/instagram-icon.png"
import twitter from "../static/twitter-icon.png"
import email from "../static/email-icon.png"
import github from "../static/github-icon.png"
import resume from "../static/resume.png"
import { Link } from 'react-router-dom'

export default class StephenInfo extends Component {
  render() {
    return (
      <div className="stephen-info">
        <ul>
          <li>
            <a href="https://www.instagram.com/stelseythelesser/" target="_blank">
              <img className="icon" src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/StelseyLesser" target="_blank">
              <img className="icon" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/stephanis1494" target="_blank">
              <img className="icon" src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="mailto:Stephen@Stelsey.com">
              <img className="icon" src={email} alt="email" />
            </a>
          </li>
          <li>
            <Link to="/resume">
              <img className="icon" src={resume} alt="resume" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
