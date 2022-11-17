CREATE DATABASE test;


DROP TABLE IF EXISTS "app_users";
DROP SEQUENCE IF EXISTS app_users_id_seq;
CREATE SEQUENCE app_users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."app_users" (
    "id" bigint DEFAULT nextval('app_users_id_seq') NOT NULL,
    "email" character varying(100) NOT NULL,
    "password" character varying(100) NOT NULL,
    CONSTRAINT "app_users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "device";
DROP SEQUENCE IF EXISTS device_uid_seq;
CREATE SEQUENCE device_uid_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."device" (
    "uid" bigint DEFAULT nextval('device_uid_seq') NOT NULL,
    "vendor" character varying(100),
    "date" character varying(20),
    "status" character varying(20),
    "gatewayId" bigint,
    CONSTRAINT "device_pkey" PRIMARY KEY ("uid")
) WITH (oids = false);


DROP TABLE IF EXISTS "gateway";
DROP SEQUENCE IF EXISTS gateway_id_seq;
CREATE SEQUENCE gateway_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."gateway" (
    "id" bigint DEFAULT nextval('gateway_id_seq') NOT NULL,
    "name" character varying(100),
    "ip" character varying(15),
    CONSTRAINT "gateway_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


ALTER TABLE ONLY "public"."device" ADD CONSTRAINT "device_gatewayId_fkey" FOREIGN KEY ("gatewayId") REFERENCES gateway(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;