// 1).

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

// 2).

// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

let listitems = document.querySelectorAll('li');
for (let item of listitems) {
    console.log(item)
}

// // 3).

// // Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)


for (let i = 0; i < listitems.length; i++) {
    listitems[i].innerText = i;
    console.log(i)
    console.log(listitems[i])
}

// 4).

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function funct(tag, color, text) {
    let tag2 = document.createElement(tag);
    document.body.appendChild(tag2);
    tag2.innerText = text;
    document.body.style.color = color
    console.log(tag2)
}
funct('h1', 'red', 'hello')

// 5).

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'hello'
p.style.fontSize = '36px'
p.style.fontWeight = 'bold'
document.body.appendChild(p); 

// 6).

// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

let select = document.createElement('select');
for (let i = 1960; i <= 2021; i++) {
    let option = document.createElement('option');
    option.innerText = i
    select.appendChild(option)
}
document.body.appendChild(select)

// 7).

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:


// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];



// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

newarr = [{
name: "Женя",
order: true
},
{
name: "Кристина",
order: true
},
{
name: "Павел",
order: false
},
{
name: "Виолетта",
order: false
},
{
name: "Костя",
order: true
}];
let ul = document.createElement('ul')
function funct (arr) {
for (let item of arr) {
    let li = document.createElement('li');
    if (item.order) {
        li.innerText = `Клиент ${item.name} оплатил заказ`
    } 
    else {
        li.innerText = `Клиент ${item.name} отменил заказ`
    }
    ul.appendChild(li)
}
}
document.body.appendChild(ul)
funct(newarr)

// 8).

// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
let div = document.createElement('div')
div.style.backgroundColor = 'cyan';
div.style.padding = '30 px';
for (let item of linksArr) {
    let a = document.createElement('a')
    a.innerText = item ;
    a.href = item;
    a.setAttribute('target', "_blank")
    a.style.display = 'block'
    div.appendChild(a)
}
document.body.appendChild(div)

// 9).

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let forRemove = document.querySelectorAll('.forRemove')
for (let item of forRemove) {
        item.remove()
    }

// 10).

// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - зеленого.

let newarr = [{name: 'Nikita', age: '14'}, {name: 'Erik', age: '16'}, {name: 'Arseniy', age: '15'}];
let table = document.createElement('table')
for (let item of newarr) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = item.name
    td1.style.color = 'red';
    let td2 = document.createElement('td');
    td2.innerText = item.age
    td2.style.color = 'green';
    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
}
document.body.appendChild(table)