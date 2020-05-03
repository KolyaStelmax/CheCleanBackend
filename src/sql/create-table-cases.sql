CREATE TABLE cases (
    id SERIAL NOT NULL PRIMARY KEY,
    details VARCHAR(500) NOT NULL,
    "location" POINT NOT NULL,
    "address" VARCHAR(300) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    map_image_url VARCHAR(500) NOT NULL,
    "status" INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW() 
);

-- TODO remove this
INSERT INTO cases (details, "location", "address", image_url, map_image_url) 
VALUES('мусор', POINT(49.457857, 32.043704), 'test_address', 'test-image', 'test-url');

