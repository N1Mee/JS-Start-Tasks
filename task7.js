// 1).

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

let input = document.querySelector('input')
let ul = document.querySelector('ul')
input.addEventListener('keydown', (event) => {
    let li = document.createElement('li')
    li.innerText = event.key 
    ul.appendChild(li)
})

// 2).

// Вставить в html теги input и div (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

let input = document.querySelector('input')
input.addEventListener('keyup', (event) => console.log(input.value))

// 3).

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

let ul = document.querySelector('ul')
let input = document.querySelector('input')
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
})

// 4.1).

// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

let form = document.querySelector('form')
let input1 = document.querySelector('input.first')
let input2 = document.querySelector('input.second')
let select = document.querySelector('select')
let div = document.querySelector('div')
let result
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if ( select.value === '+'){
        result = +input1.value + +input2.value
        div.innerText = result
    }
    else if ( select.value === '-'){
        result = +input1.value - +input2.value
        div.innerText = result
    }
    else if ( select.value === '*'){
        result = +input1.value * +input2.value
        div.innerText = result
    }
    else if ( select.value === '/'){
        result = +input1.value / +input2.value
        div.innerText = result
    }
})

// 4.2).

let form = document.querySelector('form')
let input1 = document.querySelector('input.first')
let input2 = document.querySelector('input.second')
let select = document.querySelector('select')
let div = document.querySelector('div')
addEventListener('submit', (event) => {
    event.preventDefault();
    div.innerText = eval(`${+input1.value} ${select.value} ${+input2.value}`)
})

// 5).

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let button = document.querySelector('button')
function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
button.addEventListener('mouseenter', (event) => button.style.backgroundColor = `rgb(${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}) `)
button.addEventListener('mouseleave', (event) => button.style.transform = `rotate(${getRandomInt(-180, 180)}deg )`)
