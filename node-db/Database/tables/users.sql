
CREATE TABLE users
(
   id VARCHAR(100) PRIMARY KEY NOT NULL,
   username VARCHAR(100) NOT NULL UNIQUE,
   email VARCHAR(100) NOT NULL UNIQUE,
   name VARCHAR(100) NOT NULL,
   password VARCHAR(100) NOT NULL,
   role VARCHAR(100) NOT NULL
)

SELECT*
FROM users

drop table users