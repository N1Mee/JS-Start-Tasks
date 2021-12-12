// 1).

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
// alert( `number ${i}!` );
//  i++;
// }

// 2).

// Перепишите код с использованием тернарного оператора
// let male = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }

// let male = true;
// let gender = male ? 'man' : 'woman';
// console.log(gender);

// // 3).

// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]

// let tf = [true, true, false, true, false];
// let genderray = [];
// for(let item of tf){
//     let gender = (item) ? 'man' : 'woman';
//     genderray.push({gender})
// }
// console.log(genderray)

// 4).

// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

// 1)

// function findPositiveNumbers() {
//     let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//     for (let item of arr) {
//         if (item > 0) {
//             console.log(item)
//         }
//     }
// }
// findPositiveNumbers()

// 2)


// function findPositiveNumbers() {
//     let newarr = [];
//     let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
//     for (let item of arr) {
//         if (item > 0) {
//             newarr.push (item)
//         }
//     }
//     console.log(newarr)
// }
// findPositiveNumbers()


// 3)

// function findPositiveNumbers() {
//     let newarr = []
//     let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//     for (let item of arr) {
//         if (item > 0) {
//             newarr.push (item)
//         }
//     }
//     return newarr;
// }
// findPositiveNumbers()


// 4)


// let nums = [1, 2, 3, -5, -8, 0]
// function findPositiveNumbers(arr) {
//     let newarr = []
//     for (let item of arr) {
//         if (item > 0) {
//             newarr.push (item)
//         }
//     }
//     return newarr;
// }
// findPositiveNumbers(nums)

// 5)

// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

// function funct (word, num) {
//     let newarr = [];
//     for (let i = 0; i < num; i++) {
//         newarr.push(word)
//     }
//     return newarr;
// }
// console.log(funct('hi', 5));
// console.log(funct('hello', 7));

// 6)

// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

// let arr = [5, 4, 3, 8, 0];
// function filterFor(arr, a) {
//     let newarr = [];
//     for (let item of arr) {
//         if (item >= a) {
//             newarr.push(item)
//         }
//     }
//     console.log(newarr)
// }
// filterFor(arr, 4)

// 7).

// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию

// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// function randrgb() {
//     console.log(`rgb( ${getRandomInteger(0, 255)} , ${getRandomInteger(0, 255)} , ${getRandomInteger(0, 255)} )`)
// }
// randrgb();

// 8).

// Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат (!!! решить без оператора **)

// let i = 1;
// function pow(x, n) {
//     let xn = x
//     while (i < n) {
//         xn = xn*x;
//         i++
//     }
//     console.log(xn)    
// }
// pow(2, 3);

// 9).

// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.

// function isInteger(x) {
//     if (x % 1 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let bool = isInteger(3.5)
// console.log(bool)

// 10).

// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// function funct(n) {
//     for (let i = 1; i < n; i += 0.5) {
//         if (i % 1 === 0) {
//             console.log(i + ' integer')
//         }
//         else {
//             console.log(i + " decimal")
//         }
//     }
// }
// funct(5)
