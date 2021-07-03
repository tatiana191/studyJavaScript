"use strict";

let personalMovieDB;
personalMovieDB = {
    count: 0,
    movies: {}, //пустой обьект
    actors: {},
    genres: [], //пустой массив
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже просмотрели?', '');

        while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {

        if (personalMovieDB.count < 10) {
            console.log('мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ты киноман!');
        } else if (personalMovieDB.count >= 30) {
            console.log('ты супер киноман!');
        } else {
            console.log('произошла ошибка!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    },
    toggleVisibleMyDB: function (){
        if(personalMovieDB.privat) {

        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYouGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '').toLowerCase();
            personalMovieDB.genres[i - 1] = genre;
            if (genre === null || genre === " ") {
                console.log('Вы ввели неккоректные данные или не ввели их');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })
    }
};





