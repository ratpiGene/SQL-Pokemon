
CREATE TABLE genre (
genre_id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL
);

CREATE TABLE keyword (
keyword_id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL
);

CREATE TABLE language (
language_id INTEGER PRIMARY KEY AUTOINCREMENT,
code TEXT NOT NULL,
name TEXT NOT NULL
);

CREATE TABLE department (
department_id INTEGER PRIMARY KEY AUTOINCREMENT,
department_name TEXT NOT NULL
);

CREATE TABLE production_company (
company_id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
origin_country TEXT NOT NULL
);

CREATE TABLE gender (
gender_id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL
);

CREATE TABLE person (
person_id INTEGER PRIMARY KEY AUTOINCREMENT,
firstName TEXT NOT NULL,
lastName TEXT NOT NULL,
birthDate TEXT NOT NULL,
popularity REAL NOT NULL,
gender_id INTEGER NOT NULL,
FOREIGN KEY (gender_id) REFERENCES gender(gender_id)
);

CREATE TABLE movie (
movie_id INTEGER PRIMARY KEY AUTOINCREMENT,
adult BOOLEAN NOT NULL,
budget INTEGER NOT NULL,
original_language TEXT NOT NULL,
original_title TEXT NOT NULL,
overview TEXT NOT NULL,
popularity REAL NOT NULL,
status TEXT NOT NULL,
title TEXT NOT NULL,
vote_average REAL NOT NULL,
vote_count INTEGER NOT NULL
);

CREATE TABLE movie_keyword (
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
keyword_id INTEGER NOT NULL,
FOREIGN KEY (keyword_id) REFERENCES keyword(keyword_id)
);

CREATE TABLE movie_genre (
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
genre_id INTEGER NOT NULL,
FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE TABLE movie_language (
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
language_id INTEGER NOT NULL,
FOREIGN KEY (language_id) REFERENCES language(language_id)
);

CREATE TABLE movie_compagny (
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
company_id INTEGER NOT NULL,
FOREIGN KEY (company_id) REFERENCES production_company(company_id)
);

CREATE TABLE movie_cast (
movie_cast_id INTEGER PRIMARY KEY AUTOINCREMENT,
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
gender_id INTEGER NOT NULL,
FOREIGN KEY (gender_id) REFERENCES gender(gender_id),
person_id INTEGER NOT NULL,
FOREIGN KEY (person_id) REFERENCES person(person_id),
character_name TEXT NOT NULL,
cast_order INTEGER NOT NULL
);

CREATE TABLE movie_crew (
movie_crew_id INTEGER PRIMARY KEY AUTOINCREMENT,
movie_id INTEGER NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
department_id INTEGER NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(department_id),
person_id INTEGER NOT NULL,
FOREIGN KEY (person_id) REFERENCES person(person_id),
job TEXT NOT NULL
);







