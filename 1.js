//9 ТЕТРАДЬ
// function checkAge(){
//     let userName = prompt("Введите ваше имя:");
//     let userAge = prompt("Введите ваш возраст:");

//     alert("Привет, " + userName + "! Ваш возраст: " + userAge);
//     console.log("Привет, " + userName + "! Ваш возраст: " + userAge);

//     if (userAge >= 18) {
//         alert("Вы совершеннолетний");
//         console.log("Вы совершеннолетний");
//     } else {
//         alert("Вы несовершеннолетний");
//         console.log("Вы несовершеннолетний");
//     }
// }

// function randomNumber(){
//     let randomNumber = Math.floor(Math.random() * 10) + 1;

//     let userGuess = prompt("Угадайте число от 1 до 10:");

//     if (userGuess == randomNumber) {
//         alert("Поздравляем! Вы угадали число!");
//     } else {
//         if (userGuess < 5) {
//             alert("Неправильно. Ваше число меньше 5.");
//         } else {
//             alert("Неправильно. Ваше число больше 5.");
//         }
//         alert("Загаданное число было: " + randomNumber);
//     }
// }

// function passCheck(){
//     const correctPassword = "12345";

//     let userPassword = prompt("Введите пароль:");

//     if (userPassword) {
//         if (userPassword === correctPassword) {
//             alert("Доступ разрешен");
//         } else {
//             alert("Доступ запрещен");
//         }
//     } else {
//         alert("Пароль не может быть пустым");
//     }
// }

// function calc(){
//     let num1 = parseFloat(prompt("Введите первое число:"));
//     let num2 = parseFloat(prompt("Введите второе число:"));
//     let operator = prompt("Введите оператор (+, -, *, /):");

//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num2 !== 0 ? num1 / num2 : "Деление на ноль невозможно";
//     } else {
//         result = "Неверный оператор";
//     }

//     alert("Результат: " + result);
//     console.log("Результат: " + result);
// }

//12 ТЕТРАДЬ

// function showMessage(message) {
//     console.log(message);
//     alert(message); 
// }

// function logCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
// }

// function changeBackgroundColor(color) {
//     document.body.style.backgroundColor = color;
//     console.log(`Цвет фона изменен на: ${color}`);
// }

// function resetBackgroundColor() {
//     document.body.style.backgroundColor = '#b7e4ff';
//     console.log('Цвет фона возвращен к исходному значению: #b7e4ff');
// }

// function toggleVisibility(selector) {
//     const element = document.querySelector(selector);
//     if (element) {
//         const currentDisplay = window.getComputedStyle(element).display;
//         element.style.display = currentDisplay === 'none' ? 'block' : 'none';
//         console.log(`Элемент с селектором "${selector}" теперь ${currentDisplay === 'none' ? 'виден' : 'скрыт'}.`);
//     } else {
//         console.warn(`Элемент с селектором "${selector}" не найден.`);
//     }
// }

// function handleUTMTerm() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const utmTerm = urlParams.get('utm_term');
//     const h1Element = document.querySelector('h1');

//     if (h1Element) {
//         if (utmTerm) {
//             h1Element.textContent = utmTerm;
//             console.log(`Текст H1 заменен на: ${utmTerm}`);
//         } else {
//             console.log('Параметр utm_term отсутствует в URL.');
//         }
//     } else {
//         console.warn('H1 элемент не найден на странице.');
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showMessage("Скрипт загружен!");
//     handleUTMTerm();
// });





//10 ТЕТРАДЬ

// const lectures = ['Введение в вебразработку. Основы языка HTML', 'Углубленное изучение HTML', 'Углубленное изучение HTML', 'Адаптивная верстка и отзывчивый дизайн. CSS. Flexbox и Grid Layout',
//     'Bootstrap — работа с фреймворком','Основы языка JavaScript','Работа с DOM и событиями в JavaScript','Системы контроля версий. Введение в GitHub и GitHub Pages'
// ];
// const practices = ['Основы языка HTML Базовые основы языка, принципы построения страниц и основные теги их свойства и структура', 'Формы и кнопки в HTML Основы работы с формами и кнопками в HTML', 
//     'Таблицы и интерактивные элементы HTML Основы работы с таблицами и интерактивными элементами: подгрузка файлов, аудио и подобных','Основы работы с CSS Основы работы с CSS и свойствами объектов',
//     'Работа с классами в CSS Работа и настройка классов для работы в CSS','Работа с сетками и разметкой в HTML Настройка и работа с Grid Layout и Flexbox. Основы форматирования и размещения элементов в HTML',
//     'Адаптивная вёрстка Создание адаптивных документов при помощи средств языков','Bootstrap Работа с фреймворком, основные объекты, способы подключения','Основы языка JavaScript Базовый синтаксис. Запуск кода. Основные команды и переменные '];

// lectures.push('Тема 4'); 
// practices.push('Практика 4'); 

// console.log("Темы лекций:");
// lectures.forEach((lecture) => console.log(lecture));

// console.log("Темы практик:");
// practices.forEach((practice) => console.log(practice));

// function arrayToString(array) {
//     return array.join(', ');
// }

// console.log("Лекции в строку:", arrayToString(lectures));
// console.log("Практики в строку:", arrayToString(practices));


// function filterByLetterO(array) {
//     return array.filter(item => item.startsWith('О'));
// }

// const filteredLectures = filterByLetterO(lectures);
// console.log("Темы лекций, начинающиеся с буквы 'О':", filteredLectures);

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// let x = 10;
// while(x>1){
//     console.log(x)
//     --x;
// }


//11 ТЕТРАДЬ
// function reset(){
//     const h1Elements = document.querySelectorAll('h1');
//     h1Elements.forEach(h1 => {
//         h1.textContent = 'Добро пожаловать на наш сайт!';
//     });

//     const h2Elements = document.querySelectorAll('h2');
//     h2Elements.forEach(h2 => {
//         h2.style.color = 'red';
//     });

//     const paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(p => {
//         p.textContent = 'Это новый текст параграфа.';
//     });

//     const videoElements = document.querySelectorAll('iframe');
//     videoElements.forEach(iframe => {
//         iframe.style.display = 'none';
//     });
// }


// const formData = {
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     comment: '',
//     printData: function () {
//         console.log(`
// Имя: ${this.name}
// E-mail: ${this.email}
// Телефон: ${this.phone}
// Дата: ${this.date}
// Комментарий: ${this.comment}
//         `);
//     }
// };

// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function validatePhone(phone) {
//     const phoneRegex = /^\d*$/;
//     return phoneRegex.test(phone);
// }

// function submitForm() {
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const date = document.getElementById('date').value;
//     const comment = document.getElementById('comment').value.trim();

//     if (!name || !email || !comment) {
//         alert('Поля "Имя", "E-mail" и "Комментарий" не должны быть пустыми.');
//         return;
//     }
//     if (!validateEmail(email)) {
//         alert('Введите корректный e-mail.');
//         return;
//     }
//     if (phone && !validatePhone(phone)) {
//         alert('Поле "Телефон" должно содержать только цифры.');
//         return;
//     }

//     formData.name = name;
//     formData.email = email;
//     formData.phone = phone;
//     formData.date = date;
//     formData.comment = comment;

//     formData.printData();

//     alert('Форма успешно отправлена!');
// }


//Тетрадь 13




document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("jsHeader");
    
    header.addEventListener("click", function () {
        alert("Вы кликнули на заголовок - так держать!");
    });

    header.addEventListener("mouseover", function () {
        header.style.fontSize = "2.5em";
    });

    header.addEventListener("mouseout", function () {
        header.style.fontSize = "1.5em"; 
    });
});


document.getElementById("second-semester-button").addEventListener("click", () => {
    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации"
    ];

    const tableBody = document.getElementById("practice-table-body");
    tableBody.innerHTML = "";

    secondSemesterPractices.forEach((practice, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${practice}</td>`;
        tableBody.appendChild(row);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("animatedParagraph");

    paragraph.addEventListener("click", function () {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        paragraph.style.backgroundColor = randomColor;
    });
});



const studentPhoto = document.getElementById('studentPhoto');
const favoriteTeacherPhoto = './Photo/Screenshot_3.png'; 

studentPhoto.addEventListener('mouseover', function() {
    this.style.width = '30%';
    this.style.height = '30%';
});

studentPhoto.addEventListener('mouseout', function() {
    this.style.width = '20%';
    this.style.height = '20%';
});

studentPhoto.addEventListener('click', function() {
    this.src = favoriteTeacherPhoto;

});

studentPhoto.addEventListener('dblclick', function() {
    alert('Не налегай, у меня не так много любимых преподавателей');
});

document.getElementById("showLectures").addEventListener("click", function () {
    const table = document.getElementById("lecturesTable");

    if (table.classList.contains("visible")) {
        table.classList.remove("visible");
    } else {
        table.classList.add("visible");
    }
});
document.getElementById("submitButton").addEventListener("click", function () {
    const message = document.getElementById("message");

    message.classList.remove("hidden");
    setTimeout(() => {
        message.classList.add("visible");
    }, 10);

    setTimeout(() => {
        message.classList.remove("visible");
        setTimeout(() => {
            message.classList.add("hidden");
        }, 1000);
    }, 3000);
});

// document.querySelector('.reset').addEventListener('click', reset);
// document.querySelector('.randNum').addEventListener('click', randomNumber);
// document.querySelector('.passCheck').addEventListener('click', passCheck);
// document.querySelector('.calc').addEventListener('click', calc);