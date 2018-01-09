import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return(
      <div className="indexHeader">
        <h1> Welcome to Stelsey </h1>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return(
      <div className="indexNav">
        <ul>
          <li>Home</li>
            <li>Bio</li>
              <li>sPortal</li>
                <li>Social</li>
                  <li>Contact</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render (
  <div>
    <Header/>
    <Nav/>
  </div>,
  document.getElementById("index")
);
