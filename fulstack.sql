CREATE database imgFull;


CREATE TABLE IMG (
 idImg int not null AUTO_INCREMENT,
 userName varchar(45),
 urlImg varchar(255),
 likes INT(255),
 imgDate datetime,
 PRIMARY KEY (idImg)
);

INSERT INTO IMG VALUES(null, 'Triste9', 'http://expressjs.com/es/guide/routing.html', 500, sysdate());

SELECT * FROM IMG;

SELECT * FROM IMG WHERE  idImg = 4;

DELETE FROM IMG  WHERE idImg = 5;

DROP TABLE IMG;
