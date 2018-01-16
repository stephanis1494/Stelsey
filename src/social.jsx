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

class Weatherbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: '',
      temp: ''
    };
  }

  componentDidMount(){
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=47.98&lon=-122.2&appid=fabc23275fd1777eeacfe4cd4a7e0047')
  .then((response) => response.json())
    .catch(error => console.log('Error:', error))
    .then(response => console.log('Success:', response))
    .then(response => {var weather = response})
    .then(response => {
      this.setState({
        city: weather.name,
        weather: weather.weather[0].main,
        temp: weather.main.temp
      })
    });
  }

  componentWillUnmount() {
    clearInterval(this.state);
  }

  render() {
    return (
      <div>
        <h2> The current weather is: </h2>
          <p>
            {this.state.city} <br/>
            {this.state.weather} <br/>
            {this.state.temp} <br/>
          </p>
      </div>
    );
  }
}

ReactDOM.render (
  <div>
    <Header/>
    <Weatherbutton/>
  </div>,
  document.getElementById("social")
);
