import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
              <div className="form-group">
              <label htmlFor="firstname">FirstName</label>
              <input type="text" name="firstname" placeholder="firstname" />
              <label htmlFor="lastanme">LastName</label>
              <input type="text" name="lastname" placeholder="lastname" />
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          <button type="button" className="btn">
            Register
          </button>
          </div>
          </div>
      </div>
    );
  }
}