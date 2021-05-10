import React from "react";
import axios from 'axios';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("abc");
    e.preventDefault();

    const {username, password} = this.state;
    const user = {
      username,
      password
    };
    console.log(user);
    
    axios
      .post('http://localhost:3001/login', user)
      .then(() => console.log('User Created'))
      .catch(err => {
        console.error(err);
      });
  };


  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <form onSubmit={this.handleSubmit}> 
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        </form>
      </div>
    );
  }
}