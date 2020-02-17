DROP DATABASE IF EXISTS `eat-da-burger`;
CREATE DATABASE `eat-da-burger`;
USE `eat-da-burger`;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);
