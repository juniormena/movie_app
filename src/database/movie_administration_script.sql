CREATE DATABASE colection_movie;
use colection_movie;

CREATE TABLE ACTOR(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150),
    DateBirth DATE,
    Sex VARCHAR(15),
    photo BLOB,
    PRIMARY KEY (id)
);

CREATE TABLE MOVIE(
	id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    gender VARCHAR (50),
    actor_id INT (11),
    datereleased DATE,
    photo BLOB,
    PRIMARY KEY (id),
	CONSTRAINT fk_actor FOREIGN KEY(actor_id) REFERENCES ACTOR(id)
);

DESCRIBE ACTOR;
DESCRIBE MOVIE;