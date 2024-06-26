set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "dictionary" (
  "id" serial PRIMARY KEY,
  "term" varchar(100) not null,
  "definition" varchar(200) not null,
   "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);
