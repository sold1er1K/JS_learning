"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++){

        let condition = false;
        let lastFilm = '', rate = '';

        while (condition == false){
            lastFilm = prompt("Один из последних фильмов?", "");
            if (lastFilm == null || lastFilm == '' || lastFilm.len > 50){
                console.log('[Error]: Wrong input')
            }
            else{
                condition = true;
            }
        }

        condition = false;
        while (condition == false){
            rate = prompt("На сколько оцените его?", "");
            if (rate == null || rate == ''){
                console.log('[Error]: Wrong input')
            }
            else{
                condition = true;
            }
        }

        personalMovieDB.movies[lastFilm] = rate;
    
}

if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}
else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}
else if(personalMovieDB.count >= 30){
    console.log('Вы киноман');
}
else{
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);