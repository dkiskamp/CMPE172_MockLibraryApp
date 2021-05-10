import React, {Component} from 'react';
import './Library.scss';
export default class Library extends React.Component {
    constructor(props) {
      super(props);
    }
    
    //create an array of all objects and then map it inside the render
    render() {
      return (
        <div className="base">
          <div className="top-container">
            <div className="left-info">
            <div className="form"><p>Name</p></div>
            <div className="form"><p>UserName</p></div>
            </div>
            <div className="right-info">
              <div className="form"><p>Amount</p></div>
              <button name="books" id="books" className="btn">All Borrowed Books</button>
            </div>  
          </div>
          <div className="bottom-container">
            <div className="bottom-nav"><h2>List of Books</h2></div>
          <div className="book-data">
            <div className="name"><h2>Name</h2></div>
            <div className="username"><h3>UserName</h3></div>
            <div className="amount"><h3></h3>Amount</div>
          </div>
          </div>
        </div>
      );
    }
  }