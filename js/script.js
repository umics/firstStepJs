
/* let number = 5;
const leftBorderWidth = 1;
console.log(number);

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

var name = 'Mike';
 */

/* const obj = {               
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.age)

let arr = ['plum.png', 'orange.jpg', 6]

console.log(arr[0]) // вызов значения по ключу  */

"use strict";

                                    // Простое общение с пользователем 

/* const answer = prompt('Вам есть 18?', '18');
console.log(typeof(answer)); */

/* const answer = [];

answer[0] = prompt('Напишите выше имя?', '');
answer[1] = prompt('Какая у Вас фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

document.write(answer); */

                                            // Интерполяция 

/* const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Mike';

alert(`Привет, ${user}`);
  */

                                            // Операторы 

// console.log('arr' + '- object');
// console.log(4 + + '- object');

// let incr = 10,
//     decr = 10;

/* ++incr;
--decr; */

// console.log(++incr);
// console.log(--decr);

// == - сравнение 
// === - строгое сравнение 
// && - И два правдивы
// || - ИЛИ один правдив
// ! - оператор отрицания  
//

// const isChecked = true

// 

/* let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

console.log(numberOfFilms) */



//                                 Условия


/* if (4==4) {
    console.log('Ok');
} else {
    console.log('Error');
} */

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');  // Тернарный оператор 


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default: 
//         console.log('Не в этот раз');
//         break;
// }



//                                   Циклы

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         //break;
//         continue; 
//     }
//     console.log(i);
// }

//                         Самостоятельная работа 015

// 1)
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
}; 


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--;
    }

    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

