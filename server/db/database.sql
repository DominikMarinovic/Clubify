CREATE DATABASE clubify;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE city (
	city_id uuid DEFAULT uuid_generate_v4(),
	city_name VARCHAR(50), 
	postal_code INTEGER,
	PRIMARY KEY (city_id)
);