"use strict";

    let numberOfFilms;

    function start(){
        numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?','');

        while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms) ){
            numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?','');
        }
    }
     start();

     let personalMovieDB = {
         count: numberOfFilms,
         movies: {}, //пустой обьект
         actors: {},
         genres: [], //пустой массив
         privat: false
    };
    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из просмотренных фильмов?', ''),
                d = prompt('На сколько оцените его?', '');

            if (a != null && d != null && a !== " " && d !== " " && a.length < 50) {
                personalMovieDB.movies[a] = d;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }
    rememberMyFilms();

    function detectPersonalLevel() {

         if (numberOfFilms < 10){
             console.log('мало фильмов!');
         }  else if (numberOfFilms >= 10 && numberOfFilms < 30) {
             console.log('Ты киноман!');
         }  else if (numberOfFilms >= 30){
             console.log('ты супер киноман!');
         }  else {
             console.log('произошла ошибка!');
         }
    }

     detectPersonalLevel();

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    }
    showMyDB(personalMovieDB.privat);

    function writeYouGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');//-1 так как счет для пользователя тдет с 1
        }
    }

    writeYouGenres();

