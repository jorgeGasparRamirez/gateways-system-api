CREATE DATABASE test;

CREATE TABLE app_users(
id BIGSERIAL NOT NULL PRIMARY KEY,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
);

CREATE TABLE gateway(
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
ip   VARCHAR(15)  NOT NULL
);

CREATE TABLE device(
uid BIGSERIAL NOT NULL PRIMARY KEY,
vendor VARCHAR(100) NOT NULL,
date VARCHAR(20) NOT NULL,
status VARCHAR(20) NOT NULL,
id_gateway BIGINT REFERENCES gateway (id)
)

INSERT INTO gateway (name, ip) VALUES ('LAPTOP', '12.12.121.121');
INSERT INTO device (vendor,date,status,id_gateway) VALUES ('LENOVO','2/3/2020','Online',1);


SELECT g.name,g.ip,d.vendor,d.date,d.status  FROM gateway as g LEFT JOIN device as d ON d.id_gateway= g.id