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

class Contactheader extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <p>
            Feel free to reach out to us for anything at all. Thank you for
            taking time to get to know more about what makes us Stelsey.
          </p>
        </div>
      </div>
    );
  }
}

class Submit extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {value: ""};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
  [name]: value
  });
	}

  handleSubmit(event) {
    const {Name, Email, Message} = this.state;
 const data = {
   Name: Name,
   Email: Email,
   Message: Message
 };
   fetch('/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response => console.log('Success:', data));
   event.preventDefault();
	}

  render() {
  	return(
  <div className="container">
    <div className="Submit" id="contactform">
    	<form className="form" onSubmit={this.handleSubmit}>
      	<label> Name
        <br/>
          <input name="Name" type="text" value={this.state.Name || ''} onChange={this.handleChange}/>
        </label>
        <br/>
        <label> Email
        <br/>
          <input name="Email" type="text" value={this.state.Email || ''} onChange={this.handleChange}/>
        </label>
        <br/>
        <label> Message
        <br/>
          <textarea name="Message" type="text" value={this.state.Message || ''} rows="4" cols="50" onChange={this.handleChange}/>
        <br/>
        <br/>
        </label>
        	<input type="submit" value="submit"/>
      </form>
    </div>
  </div>
    );
  }
}
ReactDOM.render (
  <div>
    <Header/>
    <Contactheader/>
    <Submit/>
  </div>,
  document.getElementById("contact")
);
