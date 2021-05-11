// server.js
//
import path from 'path';
import express from 'express';
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
var mysql = require('mysql');
var number = -1;

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    number = 1;
    return;
  }

  console.log('Connected to database.');
});

connection.end();

app.use(express.static(path.join(__dirname, 'client', 'build')));

const logger = require('morgan');
const cors = require('cors');


//use cors to allow cross origin resource sharing
app.use(
  cors()
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users = [];
users.length = 0;

const listOfBooks = [
  {bookName: 'Avatar', bookISBN: '123456789', bookAuthor: 'jack'},{bookName: 'Game of Thrones', bookISBN: '987654321', bookAuthor:'George'}
]
const bookResponse = {
  books: listOfBooks
}
app.get('/library', (req, res) =>{
    console.log("library");
    res.send(JSON.stringify(bookResponse));
})

app.post('/borrow', function(req, res){
  console.log(req.body);
  const bookdata = {
    bookISBN: req.body.bookISBN
  }
  console.log(bookdata);
});

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
  res.send(JSON.stringify("success"));
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
app.listen(4001, () => {
  console.log('Server Listening on port 4001');
});

// const kill = require('kill-port')
// const http = require('http')
// const port = 4001
// 
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
// 
//   res.end('Hi!')
// })
// 
// server.listen(port, () => {
//   setTimeout(() => {
// 
//     // Currently you can kill ports running on TCP or UDP protocols
//     kill(port, 'tcp')
//       .then(console.log)
//       .catch(console.log)
//   }, 1000)
// })
