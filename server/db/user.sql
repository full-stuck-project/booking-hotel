USE booking_clone;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL
    refresh_token VARCHAR(100) Not Null
    reset_token VARCHAR(100) Not NULL
    access_token VARCHAR(100) NOT NULL 
);
