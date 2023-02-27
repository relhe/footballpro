# POSTGRESQL DATABASE

## Create Database command

CREATE DATABASE "FOOTBALLPRO"
WITH
OWNER = postgres
ENCODING = 'LATIN9'
LC_COLLATE = 'en_CA.ISO8859-15'
LC_CTYPE = 'en_CA.ISO8859-15'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

## Create teams table

    create table teams (
    id INTEGER NOT NULL,
    teamName VARCHAR(50) NOT NULL,
    teamNickName VARCHAR(60) NOT NULL,
    founded DATE NOT NULL,
    country VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    stadium VARCHAR(50) NOT NULL,
    league VARCHAR(50) NOT NULL,
    coach VARCHAR(50),
    president VARCHAR(50),
    valuable INTEGER,
    color VARCHAR(50),
    website VARCHAR(50),
    PRIMARY KEY (id)

);
