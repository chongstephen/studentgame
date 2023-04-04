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


CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);