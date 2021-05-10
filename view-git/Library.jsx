import React, {Component} from 'react';
import './Library.scss';
import axios from 'axios';
const books = [];

export default class Library extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        username: '',
        amountowed: '0',
        bookName: '',
        bookTitle: '',
        bookAuthor: '',
        books: []   
      };
      this.getUser();
      this.getBook();
    }  

      getUser() {
        axios.get('http://localhost:3001/user')
            .then(response => {this.setState({
              firstname: response.data.firstname,
              username: response.data.username,
              amountowed: response.data.amountowed
            })})
            .catch(e => {
                console.log(e);
            });
      }
    
      getBook() {
        console.log("fetching now");
        axios.get('http://localhost:3001/library')
            .then(response => {
              this.setState({
                books: response.data.books,
                bookName: response.data.books[0].bookName,
                bookTitle: response.data.books[0].bookTitle,
                bookAuthor: response.data.books[0].bookAuthor
              })
              console.log(this.state.books);
            })
            // .then(response => {this.setState({
            //   bookName: response.data.bookName,
            //   bookTitle: response.data.bookTitle,
            //   bookAuthor: response.data.bookAuthor
            // })})
            .catch(e => {
                console.log(e);
            });
      }

     // async getBook(){
    //   let res  = await fetch('http://localhost:3001/library');
    //   res = await res.json();
    //   console.log(res);
    //   this.setState({
    //     bookName: res.body.bookName,
    //     booktitle: res.body.bookTitle,
    //     bookAuthor: res.body.bookAuthor
    //   });
    // }
    //create an array of all objects and then map it inside the render
    render() {
      return (
        <div className="base">
          <div className="top-container">
            <div className="left-info">
            <div className="form"><p>{this.state.firstname}</p></div>
            <div className="form"><p>{this.state.username}</p></div>

            </div>
            <div className="right-info">  
              <div className="form"><p>{this.state.amount}</p></div>
              <button name="books" id="books" className="btn">All Borrowed Books</button>
            </div>  
          </div>
          <div className="bottom-container">
            <div className="bottom-nav"><h2>List of Books</h2></div>
          <div className="book-data">
            <div className="bookName"><h2>{this.state.books[0]?.bookName}</h2></div>
            <div className="username"><h3>{this.state.books[0]?.bookTitle}</h3></div>
            <div className="amount"><h3></h3>{this.state.books[0]?.bookAuthor}</div>
          </div>
          </div>
        </div>
      );
    }
  }