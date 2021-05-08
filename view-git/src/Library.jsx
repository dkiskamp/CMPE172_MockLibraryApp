import React, {Component} from 'react';
import './Library.scss';
export default class Library extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="base">
          <div className="top-container">
            <div className="content">
            <div className="form"><h2>Name</h2></div>
            <div className="form"><h3>UserName</h3></div>
            <div className="form"><h3></h3>Amount</div>
            </div>
            <div className="right-buttons">
              <div className="button-right"><button name="edit" id="edit">Edit</button></div>
              <div className="button-right"><button name="books" id="books">Borrowed Books</button></div>
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