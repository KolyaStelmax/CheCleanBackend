CREATE TABLE cases (
    id SERIAL NOT NULL PRIMARY KEY,
    details VARCHAR(300) NOT NULL,
    longtitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    photo_url VARCHAR(300) NOT NULL,
    "status" INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW() 
);

INSERT INTO cases (details, longtitude, latitude, photo_url) 
VALUES('мусор', 49.457857, 32.043704, 'test-url');
