"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.HTTP_PORT || 4001;
var app = (0, _express["default"])();

var mysql = require('mysql');

var number = -1;
var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});
connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    number = 1;
    return;
  }

  console.log('Connected to database.');
});
connection.end();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));

var logger = require('morgan');

var cors = require('cors'); //use cors to allow cross origin resource sharing


app.use(cors());
app.use(logger('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
var users = [];
users.length = 0;
var listOfBooks = [{
  bookName: 'penis',
  bookISBN: 'abcdef',
  bookAuthor: 'jack'
}, {
  bookName: 'Sucks',
  bookISBN: 'abcd',
  bookAuthor: 'tanmay'
}];
var bookResponse = {
  books: listOfBooks
};
app.get('/library', function (req, res) {
  console.log("library");
  res.send(JSON.stringify(bookResponse));
});
app.post('/borrow', function (req, res) {
  console.log(req.body);
  var bookdata = {
    bookISBN: req.body.bookISBN
  };
  console.log(bookdata);
});
app.get('/user', function (req, res) {
  console.log("user");
  var user = {
    firstname: 'tanmay',
    username: 'tanmaysiwach',
    amountowed: '10'
  };
  res.send(JSON.stringify(user));
});
app.post('/register', function (req, res) {
  console.log("register");
  var user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  users.push(user);
  console.log(users);
});
var logininfo = [];
app.post('/login', function (req, res) {
  console.log("login");
  var user = {
    username: req.body.username,
    password: req.body.password
  };
  logininfo.push(user);
  console.log(logininfo);
  res.send(JSON.stringify("success"));
}); //test case.. Create.js associated to this
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

app.listen(4001, function () {
  console.log('Server Listening on port 4001');
}); // const kill = require('kill-port')
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
