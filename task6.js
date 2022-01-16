// 1).

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    console.log(str[0].toUpperCase() + str.slice(1))
}
ucFirst('murka')

// 2).

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str) {
    console.log(str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx') )
}
checkSpam('bal bla alwfp')

// 3).

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function rev(str) {
    let splitstr = str.split('')
    console.log(splitstr.reverse())
    console.log(splitstr)
    console.log(splitstr.join(''))
}
rev('Privet zhenya')

// 4).

// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// 4.1).

// Выведите полученные строковые значения на странице в виде списка (ul li) 

let ul = document.createElement('ul');
document.body.appendChild(ul)
let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
for (let item of stations) {
    let code = item.slice(0, 3);
    let name = item.slice(item.indexOf(';')+1)
    let result = `${code}: ${name}`
    console.log(result)
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = result
}
console.log(ul)

// 5).

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]
function unique(arr) {
    let newarr = [];
    for (let item of arr) {
        if (!newarr.includes(item)) {
            newarr.push(item)
        }
    }
    console.log(newarr)    
}
unique(strings)