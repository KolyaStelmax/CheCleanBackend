CREATE TABLE cases (
    id SERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(300) NOT NULL,
    longtitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    photo_url VARCHAR(300) NOT NULL,
    status VARCHAR(10) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO cases (id, description, longtitude, latitude, photo_url, status, date) 
VALUES(1, 'мусор', 49.457857, 32.043704, 'test-url','new', date '1939-09-01');

