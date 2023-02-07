
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

// let num = 50;

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
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// }; 


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else {
//         console.log('error');
//         i--;
//     }

    
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);


//                               Стрелочные функции

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {            //  FUNCTION DECLARATION      
//     let num = 50;           // Создаётся до начала выполнения скрипта, 
//                             //   можно    вызвать перед обьявлением

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// let logger = function () {           //  FUNCTION EXPRESSION 
//     console.log('hello world');      // Создаётся только тогда, когда доходит кода,можно вызвать только после объявления
// };

// logger();

// const calc = (a, b) => {return a + b};       // Не имеет своего контекста вызова (this)

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// }; 


//                                   Методы и свойства строк и чисел 

// const str = 'teSt';
// const arr = [1, 5, 7];

// console.log(str.toUpperCase()); // Все значения в верхнем регистре 
// console.log(str.toLowerCase()); // все значения в нижнем регистре 

// let fruit = "Some fruit";

// console.log(fruit.indexOf("q")); //  Выведет значение -1, что означает отсутствие в строчке такого значения.

// const logg = "Hello World";

// //console.log(logg.slice(0, 5)); //  Возвращает новый массив содержащий извлеченные элементы, поддерживает отрицательные значения  

// //console.log(logg.substring(0, 5)); // Как slice() только не поддерживает отрицательные значения 

// console.log(logg.substr(6, 2)); //  Метод начинает извлекать символы начиная с указанной позиции. И второй аргумент указывает на длину, колво символов


// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


//             Самостоятелььная работа 018

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {               // база данных
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }; 




// function remembermyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done')
//         } else {
//             console.log('error');
//             i--;
//         }            
//     }
// }

// remembermyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// //console.log(personalMovieDB);

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();

//                            CallBack функции

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500); 
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`); 
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JavaScript', done);

//                                       Объекты

// const obj = new Object();

// const options = {   //      
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; 
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {                                  //  способ перебора for in
//     if (typeof(options[key]) === 'object') {
//         for( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }

//                             Массивы и псевдомассивы

// const arr = [10, 4, 3, 226, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {   // функция для сортировки num
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop(); // удаляет последний элемент 
// arr.push(10);  //  добавляет элемент в конец массивы

// console.log(arr); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {   // Плюс том что его можно остановить  
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", "); //split возвращает строку в массив 
// products.sort(); // сортирует элементы как строки 
// console.log(products.join('; ')); // join превращает массив в строку 

// У псевдомассивов не используются методы

//                              Передача по ссылке или по значению

// let a = 5, 
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка.. нащывается передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//    return objCopy;
// }       

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7, 
//         y: 4
//     }  
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }

//  const clone = Object.assign({}, add); // Объединение объектов

//  clone.d = 20;

// console.log(clone);
// console.log(add);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'sdsdfsdf';

// console.log(newArray);
// console.log(oldArray);

// //                       Четвертый способ создания поверхостных копий 

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'lifejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // Оператор разворота ...

//     console.log(internet);

//     function log (a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     const num = [2, 5, 7];

//     log(...num);

//     const array = ['a', 'b'];

//     const newAarray = [...array];

//     const q = {
//         one: 1,
//         two: 2
//     };

//     const newObj = {...q};

//     console.log(newObj);

//              Основы ООП, прототипно-ориентированное наследование 

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);  Один из вариантов прототипа

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;

//Object.setPrototypeOf(jonh, soldier);    Правильный тип прототипирования 

//console.log(jonh.armor);

// jonh.sayHello();

//                           024 Практика ч.4 Используем объекты


// const personalMovieDB = {               // база данных
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     remembermyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
            
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done')
//             } else {
//                 console.log('error');
//                 i--;
//             }            
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if(genre == '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//         })
//     }
// }; 





//                             025  Отлавливаем ошибки в своём коде при помощи консоли разработчика. Breakpoints
//                             026 Динамическая типизация 

//1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)                         

console.log(typeof(5 + ''));  // Конкатенация- это сложение строк/строки с чем- то 

let gg = 5;

console.log("https://vk.com/catalog/" + gg);



//3)




 

