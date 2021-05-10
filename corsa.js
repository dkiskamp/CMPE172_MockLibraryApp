const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors()
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users = [];
users.length = 0;

app.get('/library', (req, res) =>{
    console.log("library");
    const book = {
      bookName: 'penis',
      bookTitle: 'penis returns',
      bookAuthor: 'jack gisel'
    }
    res.send(JSON.stringify(book));
})

app.get('/user', (req, res) =>{
  console.log("user");
  const user = {
    firstname: 'tanmay',
    username: 'tanmaysiwach',
    amountowed: '10'
  }
  res.send(JSON.stringify(user));
})

app.post('/register', function(req, res) {
  console.log("register");
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  users.push(user);
  console.log(users);
});

let logininfo = [];
app.post('/login', function(req, res) {
  console.log("login");
  const user = {
    username: req.body.username,
    password: req.body.password
  };
  logininfo.push(user);
  console.log(logininfo);
});

//test case.. Create.js associated to this
// let books = [];
// books.length = 0;
// app.post('/create', function(req, res){
//   console.log("create");

//   const book = {
//     BookId: req.body.bookID,
//     title: req.body.bookTitle,
//     author: req.body.bookAuthor
//   }
//   books.push(book);
//   console.log(books);
// })

//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});