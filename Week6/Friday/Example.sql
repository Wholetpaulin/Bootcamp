SET SQL_SAFE_UPDATES = 0;
CREATE DATABASE join_example;

USE join_example;

CREATE TABLE users (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
name VARCHAR(100),
post_date INTEGER(2),
PRIMARY KEY(id)
);

CREATE TABLE comments (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
data INTEGER(2),
author VARCHAR(100),
PRIMARY KEY(id)
);
 -- ############Populate Database############ --
INSERT INTO users(name, post_date)
VALUES ("Kyle", 8);
INSERT INTO users(name, post_date)
VALUES ("Paul", 3);
INSERT INTO comments(data, author)
VALUES (10, "George R. Martin");
INSERT INTO comments(data, author)
VALUES (4, "Jane Austin");

 -- ############Print Databases############ --

SELECT * FROM users;
SELECT * FROM comments;

 -- ############Join bullshits############ --
SELECT name, post_date
FROM comments
INNER JOIN users ON comments.id=users.id;


