let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');

box.style.backgroundColor = 'blue'; // обратились к стилям и меняем цвет квадрата на голубой
btn[1].style.borderRadius = '100%'; // изменили форму второй кнопки

circle[0].style.backgroundColor = 'yellow'; // изменили цвет элемента, выбрав его из псевдомассива
circle[1].style.backgroundColor = 'green';

let div = document.createElement('div'); // создали новый элемент с помощью метода createElement
    text = document.createTextNode('hello world'); // создание тестовой ноды без оболочки cerateTextNode

div.classList.add('black');

//div.innerHTML = '<h1>Hello World!</h1>' добавляет на странице любой элемент в html код
div.textContent = 'hello world!'; // добавляет на страницу исключительно текст!



//  document.body.appendChild(div); // добавили элемент в конец тега body
    document.body.insertBefore(div, circle[0]); // добавили элемент перед тегом circle, указав порядковый номер элемента
    document.body.removeChild(circle[2]); // удалили элемент с помощью тега removeChild
    document.body.replaceChild(btn[1], circle[0]); // заменили circle[0] на btn[1]


console.log(div);