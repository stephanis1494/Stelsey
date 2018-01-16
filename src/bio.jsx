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

class Chelseybio extends React.Component {
  render() {
    return (
      <h1> Chelsey Child. </h1>
    );
  }
}


class Stephenbio extends React.Component {
  render() {
    return (
      <h1> Stephen Child. </h1>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      active2: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  handleClick2() {
    this.setState({
      active2: !this.state.active2
    });
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <button type="button" onClick={this.handleClick}>
              Chelsey
            </button>
            {this.state.active && <Chelseybio/>}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <button type="button" onClick={this.handleClick2}>
              Stephen
            </button>
            {this.state.active2 && <Stephenbio/>}
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render (
  <div>
    <Header/>
    <Button/>
  </div>,
  document.getElementById("bio")
);
