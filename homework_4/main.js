// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function randomGenerator() {
//     let range = 7;
//     let arr = [];
//     for (let i = 0; i < range; i++) {
//         let res = Math.floor(Math.random() * 100);
//         arr.push(res);
//     }
//     console.log(arr);
// }
//
// randomGenerator();

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// function randomGenerator(min, max) {
//     let range = 10;
//     let arr = [];
//     for (let i = 0; i < range; i++) {
//         let res = Math.round(Math.random() * (max - min + 1)) + min;
//         arr.push(res);
//     }
//     console.log(arr);
// }
//
// randomGenerator(0, 100);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// function randomGenerator(min, max) {
//     let range = 10;
//     let arr = [];
//     for (let i = 0; i < range; i++) {
//         let res = Math.round(Math.random() * (max - min + 1)) + min;
//         arr.push(res);
//     }
//     console.log(arr.sort(function (a, b) {
//         return a - b;
//     }));
// }
//
// randomGenerator(0, 99);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let radom = function () {
//     let arr = [];
//     for (let i = 0; i < 8; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr.filter(number => number % 2 === 0));
// }
//
// radom();

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let arr = [1, 5, 2, 18, 13, 26, 33, 55, 75];
//
// let map = arr.map(function (num) {
//     return num.toString();
// })
// console.log(map);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(10, 'Vasya', 'Galik', 'rap@vasyarap.ua', +38077777777),
    new User(9, 'Vanya', 'Talik', 'email@gmail.ua', +38077888777),
    new User(8, 'Tanya', 'Flower', 'baby@gmail.ua', +38068988779),
    new User(7, 'Anya', 'Sergejevna', 'anna@gmail.ua', +380344647),
    new User(6, 'Nazar', 'Prinda', 'nazik@gmail.ua', +48077888777),
    new User(5, 'Ruslan', 'Duma', 'duma@gmail.ua', +4207964377),
    new User(4, 'Oleg', 'Dog', 'dog@yandex.ua', +38073138777),
    new User(3, 'Sashka', 'Gusak', 'alex@atlas.cz', +4208777555),
    new User(2, 'Vlad', 'Dracula', 'drac@meta.ua', +3800000001),
    new User(1, 'James', 'Bod', 'bond007@gmail.ua', +38000000007),
];

//------------------------------------------------------------------------------------
// let filter = users.filter(value => value.id % 2 === 0);
// console.log(filter);
//
// let sortID = users.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(sortID);
//-------------------------------------------------------------------------------------

function filtersSort(arr) {
    let filter = arr.filter(value => value.id % 2 === 0);
    filter.sort((a, b) => {
        return a.id - b.id;
    })
    console.log(filter);
}

filtersSort(users);