 "use strict";
let numberOfFilms;
let personalMovieDB = {
        "count" : numberOfFilms,
        "movies" : {},
        "actors" : {},
        "genres" : [],
        "privat" : false
    };


start();

rememberMyFilms();

writeYourGenres ();

detectPersonalLevel();



 function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",);

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",);
    }
}

 function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let lastFilm = prompt("Один из последних просмотренных фильмов?",);
        let rateFilm = prompt("Насколько оцените его?",);
    
        if (lastFilm !== "" &&  rateFilm !== "" && rateFilm !== null && lastFilm !== null && lastFilm.length < 50 ){
            personalMovieDB.movies[lastFilm] = rateFilm;
            } else {
                i--;
            }
     }
 }

 function detectPersonalLevel(){
    if (personalMovieDB["count"]<10){
        alert("Просмотрено довольно мало фильмов");
     } else if (10 < personalMovieDB["count"] < 30) {
         alert("Вы классический зритель");
     } else if (personalMovieDB["count"] > 30) {
        alert("Вы киноман");
     } else {
        alert("Произошла ошибка");
     }
}

function writeYourGenres (){
    for (let i = 0; i < 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`,); 
        if (genre !== "" && genre !== null && isNaN(genre)){
            personalMovieDB.genres[i] = genre;
        } else {
            i--;
        }
    }
    
}

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
        }
}

showMyDB (personalMovieDB.privat);

