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
select * from actor;
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


/*Stored procedure*/
DELIMITER $$;
USE `colection_movie`$$;

CREATE PROCEDURE `ActorAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN _DateBirth DATE,
  IN _sex VARCHAR(25),
  IN _photo BLOB
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO ACTOR (name, DateBirth,sex,photo)
    VALUES (_name,_DateBirth,_sex,_photo);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE ACTOR
    SET
    name = _name,
    DateBirth = _DateBirth,
    Sex = _sex,
    photo= _photo
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END;

DELIMITER $$;
USE `colection_movie`$$;
CREATE PROCEDURE `MovieAddOrEdit` (
  IN _id INT,
  IN _title VARCHAR(45),
  IN _gender VARCHAR(100),
  IN _actor_id INT(11),
  IN _datereleased DATE,
  IN _photo BLOB
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO MOVIE (title, gender,actor_id,datereleased,photo)
    VALUES (_title, _gender,_actor_id,_datereleased,_photo);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE MOVIE
    SET
    title = _title,
    gender = _gender,
    actor_id = _actor_id,
    datereleased = _datereleased,
    photo= _photo
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END

