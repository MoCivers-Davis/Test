
DROP DATABASE IF EXISTS covid19_db;
CREATE database covid19_db;

USE covid19_db;

CREATE TABLE countries (
    id INT(10) AUTO_INCREMENT NOT NULL,
    countryName VARCHAR(100),
    incidents INT(200),
    deaths INT(200),
    PRIMARY KEY(id)
)