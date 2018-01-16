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

class Welcome extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <p>
            Welcome to the home page for Chelsey & Stephen Fairris. We would
            love to get to know you as you use this space to get to know us.
          </p>
        </div>
      </div>
    );
  }
}

class Whoweis extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
           <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
             <img className="welcome" src="./images/welcome1.jpeg" alt="Endearing Photo"/>
              </div>
                <div className="col-lg-8 col-md-9 col-sm-6 col-xs-12">
                  <p>
                    Chelsey Fairris was born and raised in Abbotsford, B.C.. She
                    enjoys the visual arts, binge watching and smoking incredibly
                    large amounts of the peoples weed. Stephen Fairris was born and
                    raised in the Seattle area and enjoys making music as well as
                    struggling to become a halfway decent front-end web developer.
                  </p>
                </div>
              </div>
            </div>
    );
  }
}

class Howwebe extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
            <p>
              Chelsey and Stephen first met in Highschool in Abbotsford and
              dated during that time for a short while. After young love diminished
              they both went there seperate ways for almost 10 years. After a series
              of bad relationships they found each other again and true love blossomed.
              They got married on August 26, 2017 in Bellingham, Wa.
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img className="welcome" src="./images/welcome2.jpeg"/>
          </div>
        </div>

      </div>
    );
  }
}
ReactDOM.render (
  <div>
    <Header/>
    <Welcome/>
    <Whoweis/>
    <br/>
    <br/>
    <Howwebe/>
  </div>,
  document.getElementById("index")
);
