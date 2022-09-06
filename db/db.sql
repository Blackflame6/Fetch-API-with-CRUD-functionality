DROP DATABASE IF EXISTS fetchdb;

CREATE DATABASE fetchdb;

DROP TABLE IF EXISTS todo

CREATE TABLE todo(
id SERIAL PRIMARY KEY,
task TEXT,
description TEXT


);

INSERT INTO todo (task, description) VALUES ('Bake cake for Suzan', 'Its going  to be her Birthday and she wants a present');
INSERT INTO todo (task, description) VALUES ('Truck oil change', 'I  have not done an oil change in 5 months');
INSERT INTO todo (task, description) VALUES ('Go fishing', 'Its been a while since I went fishing');
INSERT INTO todo (task, description) VALUES ('replace patio bulb', 'It been off for days,the bulb must be dead');
INSERT INTO todo (task, description) VALUES ('buy new printer', 'I need  to get ready for my partime job');
INSERT INTO todo (task, description) VALUES ('Clear from the Army', 'Needs to successfully Transition into civilian life');