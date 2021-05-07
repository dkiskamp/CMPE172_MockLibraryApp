DROP TABLE IF EXISTS `late_fee`;
DROP TABLE IF EXISTS `borrowed_book`;
DROP TABLE IF EXISTS `author_of_book`;
DROP TABLE IF EXISTS `author`;
DROP TABLE IF EXISTS `book`;
DROP TABLE IF EXISTS `admin_account`;
DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  user_id int PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  salt varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  created_at timestamp NOT NULL
);

CREATE TABLE `admin_account` (
  admin_id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES `account` (user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `book` (
  isbn varchar(255) PRIMARY KEY,
  title varchar(255) NOT NULL,
  publisher varchar(255),
  publication_year int,
  total_num int NOT NULL
);

CREATE TABLE `author` (
  author_id int PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(255),
  last_name varchar(255),
  CONSTRAINT uc_author UNIQUE (first_name, last_name)
);

CREATE TABLE `author_of_book` (
  isbn varchar(255),
  FOREIGN KEY (isbn) REFERENCES `book` (isbn)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  author_id int,
  FOREIGN KEY (author_id) REFERENCES `author` (author_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT uc_author_of_book UNIQUE (isbn, author_id)
);

CREATE TABLE `borrowed_book` (
  isbn varchar(255),
  FOREIGN KEY (isbn) REFERENCES book(isbn)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES `account` (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  borrow_date timestamp NOT NULL,
  return_date timestamp
);

CREATE TABLE `late_fee` (
  user_id int,
  FOREIGN KEY (user_id) REFERENCES `account` (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  fee decimal(6,2) NOT NULL,
  start_date timestamp NOT NULL
);