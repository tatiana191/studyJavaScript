"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?','');
let personalMovieDB = {
   count:numberOfFilms,
   movies:{}, //пустой обьект
   actors:{},
   genress:[], //пустой массив
   privat:false
};
const a = prompt('Один из просмотренных фильмов?','');
const b = prompt('На сколько оцените его?','');
const c = prompt('Один из просмотренных фильмов?','');
const d = prompt('На сколько оцените его?',''); 

personalMovieDB.movies[a]=b; //влпрос ответ
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);