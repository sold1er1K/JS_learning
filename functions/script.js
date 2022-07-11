'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


start();
rememberMyFilms();
checkPersonalSkills();
writeYourGenres();


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){

        let condition = false;
        let lastFilm = '', rate = '';

        while (condition == false){
            lastFilm = prompt('Один из последних фильмов?', '');
            if (lastFilm == null || lastFilm == '' || lastFilm.len > 50){
                console.log('[Error]: Wrong input')
            }
            else{
                condition = true;
            }
        }

        condition = false;
        while (condition == false){
            rate = prompt('На сколько оцените его?', '');
            if (rate == null || rate == ''){
                console.log('[Error]: Wrong input')
            }
            else{
                condition = true;
            }
        }

        personalMovieDB.movies[lastFilm] = rate;
    }
}


function checkPersonalSkills(){
    if (numberOfFilms < 10){
        console.log('Просмотрено довольно мало фильмов');
    }
    else if(numberOfFilms >= 10 && numberOfFilms < 30){
        console.log('Вы классический зритель');
    }
    else if(numberOfFilms >= 30){
        console.log('Вы киноман');
    }
    else{
        console.log('Произошла ошибка');
    }
    console.log(personalMovieDB);
}


function showMyDB(){
    if (personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}


function writeYourGenres(){
    for (let index = 1; index <= 3; index++)
    {
        let genre = prompt(`Ваш любимый жанр под номером ${index}?`, '');
        while (genre == '' || genre == null) {
            genre = prompt(`Ваш любимый жанр под номером ${index}?`, '');
        }
        personalMovieDB.genres[index - 1] = genre;
    }
}