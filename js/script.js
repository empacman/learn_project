 "use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " "),

    personalMovieDB = {
        "count" : numberOfFilms,
        "movies" : {},
        "actors" : {},
        "genres" : [],
        "privat" : false
    };

let lastFilm = prompt("Один из последних просмотренных фильмов?", " ");
let rateFilm = prompt("Насколько оцените его?", " ");

personalMovieDB.movies[lastFilm] = rateFilm;

let lastFilm2 = prompt("Один из последних просмотренных фильмов?", " ");
let rateFilm2 = prompt("Насколько оцените его?", " ");

personalMovieDB.movies[lastFilm2] = rateFilm2;

console.log(personalMovieDB);