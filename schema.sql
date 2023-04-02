DROP DATABASE IF EXISTS studentgame;
CREATE DATABASE studentgame;


DROP SCHEMA IF EXISTS mathgame;
CREATE SCHEMA mathgame;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  weeklyscore INT NOT NULL,
  alltimescore INT NOT NULL,
)

