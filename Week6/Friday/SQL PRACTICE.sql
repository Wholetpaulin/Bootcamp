SET SQL_SAFE_UPDATES = 0;
CREATE DATABASE programming_db;
USE programming_db;

CREATE TABLE programming_laungages (
id INTEGER(11) AUTO_INCREMENT NOT NULL;
PRIMARY KEY(id);
laungages VARCHAR(100),
rating INTEGER(10) 
);