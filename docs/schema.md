# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | default url

## friend_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references a user), indexed, unique [user_id]
friend_id   | integer   | not null, foreign key (references another user), indexed, unique [user_id]

## comments
column name      | data type  | details
-----------------|------------|-----------------------
id               | integer    | not null, primary key
author_id        | integer    | not null, foreign key (references users), indexed
body             | string     | not null
commentable      | polymorphic| not null

## routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
distance    | string    | not null
map_info    | text      | not null

## trots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | string    | not null
string    | integer   | not null
date        | date      | not null
duration    | string    | not null
map_info    | text      | not null
