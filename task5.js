// 1).

// Дан объект:
// let user = { name: 'Tom', age: 20, isMarried: false }
// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in

let user = { name: 'Tom', age: 20, isMarried: false }
function funct (obj) {
    let newarr = []
    for (let property in obj) {
        newarr.push(`${property} - ${obj[property]}`)
    }
    console.log(newarr)
}
funct(user)

// 2).

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function sum (a,b) {
    let typea = typeof a
    let typeb = typeof b
    if (arguments.length < 2) {
        console.log('insert two numbers')
    }
    else if (typeof a != 'number' || typeof b != 'number'){
        console.log('not a number')
    }
    else {
        console.log(a+b)
    }
}
sum()

// 3).

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
let guess = (num) => {
    if (num < 0) {
        console.log('число должно быть не меньше 0')
    }
    else if (num > 10) {
        console.log('число должно быть не больше 10')
    }
    else {
        let a = getRandomInteger(0, 10);
        if (num === a) {
            console.log('Вы выиграли!')
        }
        else {
            console.log(`вы не угадали, ваше число ${num}, а выпало число ${a}`)
        }
    }
}
guess(3)

// 4).

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

newarr = ['bob', 'nikita', 'mike']
function copyArr(arr) {
    return arr.map(name => name)
}
console.log(copyArr(newarr))

// 5).

// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let listItems = document.querySelectorAll('li');
let ul = document.querySelector('ul');
let newarr = [];
for (let item of listItems) {
    if (item.innerText % 2 === 0) {
        newarr.push(item.innerText)
    }
    console.log(newarr)
}
newarr.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item;
    ul.appendChild(li)
})

// 6).

// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с текстом Категория 1, Категория 2, Категория 3). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let textinp = document.createElement('input');
// textinp.setAttribute('type', 'text')
textinp.type = 'text'
let select = document.createElement('select')
for (let i = 1; i < 5; i++) {
    let opt = document.createElement('option');
    opt.innerText = 'category' + i
    select.appendChild(opt)
}
let ul = document.createElement('ul')
function addli () {
    let li = document.createElement('li')
    li.innerText = 'hello'
    ul.appendChild(li)
}
setInterval(addli, 1000)
document.body.appendChild(textinp)
document.body.appendChild(select)
document.body.appendChild(ul)
