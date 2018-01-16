import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="page-header">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src="./images/example icon.png"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h1> Welcome to Stelsey </h1>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <ul className="list-inline">
                <li><a href="/"> Home </a></li>
                  <li><a href="./bio"> Bio </a></li>
                    <li><a href="./sportal"> sPortal </a></li>
                      <li><a href="./social"> Social </a></li>
                        <li><a href="./contact"> Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render (
  <div>
    <Header/>
  </div>,
  document.getElementById("sportal")
);
