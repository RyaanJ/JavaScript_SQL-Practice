CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', 'May 30th, 1940');

INSERT INTO friends (id, name, birthday)
VALUES(2, 'Jason moor', 'May 27th, 1943');

INSERT INTO friends
VALUES(3, 'Cockche', "Jan 18th, 1991");

UPDATE friends
SET name = "Storm"
WHERE id = 1;

ALTER TABLE friends
ADD email TEXT;

UPDATE friends
SET email = "storm@gmail.com"
WHERE id < 10;

DELETE FROM friends WHERE id = 1;

-- Add more friends
INSERT INTO friends (id, name, birthday, email)
VALUES 
(4, 'Logan Howlett', 'April 5th, 1880', 'logan@xmen.com'),
(5, 'Jean Grey', 'November 4th, 1956', 'jean@xmen.com');

-- Update the email of a friend
UPDATE friends
SET email = 'jason.moor@friends.com'
WHERE id = 2;

-- Query to list all friends and sort them by their birthday in descending order
SELECT * FROM friends
ORDER BY birthday DESC;