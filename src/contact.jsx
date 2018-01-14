import React from 'react';
import ReactDOM from 'react-dom';

class Conheader extends React.Component {
  render() {
    return(
      <div className="contactHeader">
        <h1> Contacts </h1>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return(
      <div className="indexNav">
        <ul>
          <li><a href="/"> Home</a></li>
            <li>Bio</li>
              <li>sPortal</li>
                <li>Social</li>
                  <li><a href="./contact"> Contact</a></li>
        </ul>
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
        </label>
        	<input type="submit" value="submit"/>
      </form>
    </div>
    );
  }
}
ReactDOM.render (
  <div>
    <Conheader/>
    <Nav/>
    <Submit/>
  </div>,
  document.getElementById("contact")
);
