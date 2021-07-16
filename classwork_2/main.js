// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [5,12,18,25,30];
// let str = ['rap', 'music', 'work', 'many', 'beer'];
// let mix = ['pop', 13, false, 26, 'true'];
// console.log(number, str, mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'good';
// arr[1] = 9;
// arr[2] = true;
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`
// <div>
// <p>Lorem ipsum dolor sit amet.</p>
// </div>
// `);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//  document.write(`
// <div>
//     <p>${[i+1]}. Lorem ipsum dolor sit amet.</p>
// </div>
// `);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`
//     <div>
//     <h1>Text</h1>
// </div>
//     `);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`
//     <div>
//     <h1>${i+1}. Lorem ipsum dolor sit amet.</h1>
// </div>
//     `);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1,2,3,4,5,6,7,8,9,10];
//
// for (const number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 'two', 3, 'four', true, 'six', false, 18, 'nine', 'ten'];
//
// let i=0;
// while (i<arr.length) {
// console.log(arr[i])
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 'two', 3, 'four', true, 'six', false, 18, 'nine', true];
// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 'two', 3, 'four', true, 'six', false, 18, 'nine', true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 'two', 3, 'four', true, 'six', false, 18, 'nine', true];
// let i=0;
// while (i<arr.length) {
//     if(typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
//     i++;
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'zero';
// arr[1] = 1;
// arr[2] = 22;
// arr[3] = true;
// arr[4] = 'four';
// arr[5] = 1;
// arr[6] = true;
// arr[7] = 150;
// arr[8] = false;
// arr[9] = 'nine';
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i+=1) {
//     console.log(i);
// document.write(`${i}<br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=1) {
//     console.log(i);
// document.write(`${i}; `);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i}; `);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`${i}; `);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`${i}; `);
//     }
// }

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithCities = [];

for (const userID of usersWithId) {
    for (const cityID of citiesWithId) {
        if (userID.id === cityID.user_id) {
            userID.address = cityID;
            usersWithCities.push(userID);
        }
    }
}
console.log(usersWithCities);