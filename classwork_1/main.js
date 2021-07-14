// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str); //string
// console.log(typeof num); //number
// console.log(typeof flag); //boolean
// console.log(typeof txt); //string

//
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
//

// let a1 = (55 / 5) + 23;
// console.log(a1);
//
// let a2 = (10 * 2) - 8;
// console.log(a2);
//
// let a3 = 100 - 35 + 1;
// console.log(a3);
//
// let a4 = 6 * 30 / 2;
// console.log(a4);
//
// let a5 = (188 / 2) - 7;
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// let a6 = 5 % 3; //2
// console.log(a6);
//
// let a7 = 3 % 5; //3
// console.log(a7);
//
// let a8 = 5 + '3'; //53
// console.log(a8);
//
// let a9 = '5' - 3; //2
// console.log(a9);
//
// let a10 = 75 + 'кг'; //75кг
// console.log(a10);

//
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);

//
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = Math.PI * dC * heightC;
// console.log(v);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
// console.log(k);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = 'Jason';
// let lastName = 'Statham';
// let age = 29;
// let hobby = 'drinking beer';

// alert(`
// My name is ${name} ${lastName}.\n
// I am ${age} years old.\n
// My hobby: ${hobby}.
// `);

//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1;
// let str2;
// let str3;
// let concatenation;
//
// str1 = 'Кто ';
// str2 = 'ты ';
// str3 = 'такой?';
// concatenation = `${str1} ${str2} ${str3}`;
// document.write(concatenation);

//
// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
// // document.write(str + a + "<br/>");   //205
// // document.write(str - a + "<br/>");   //15
// // document.write(str * "2" + "<br/>"); //40
// document.write(str / 2 + "<br/>");      //10

//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let num1 = +prompt('Enter the first number');
// let num2 = +prompt('Enter the second number');
// alert(`Result: ${num1+num2}`);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Enter your name');
// let lastName = prompt('Enter your last name');
// let age = prompt('How old are you');
// alert(`Доброго вечера ${name} ${lastName}, мои поздравления что вам ${age}`);

// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt('Enter number1');
// let b = +prompt('Enter number2');
// let c = +prompt('Enter number3');
//
// if (a <= b && b <= c && a <= c) {
//     console.log(`${a} < ${b} < ${c}`);
// }
// if (b <= c && c <= a && b <= a) {
//     console.log(`${b} < ${c} < ${a}`);
// }
// if (c <= a && a <= b && c <= b) {
//     console.log(`${c} < ${a} < ${b}`);
// }
// if (a <= b && c <= b && a <= c) {
//     console.log(`${a} < ${c} < ${b}`);
// }
// if (c <= a && c <= b && b <= a) {
//     console.log(`${c} < ${b} < ${a}`);
// }
// if (b <= c && b <= a && a <= c) {
//     console.log(`${b} < ${a} < ${c}`);
// }

//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// switch (prompt('color')) {
//     case 'green':
//         alert(`Go`);
//         break;
//     case 'yellow':
//         alert(`Wait...`);
//         break;
//     case 'red':
//         alert(`Stop`);
//         break;
//     default:
//         alert('делай что хочешь!')
// }

//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('color');
let isRoadClear = confirm('Is road clear?');

switch (color) {
    case 'green':
        if (isRoadClear) {
            alert(`Go`);
        }
        if (!isRoadClear) {
            alert(`wait until the violators pass`);
        }
        break;
    case 'yellow':
        if (isRoadClear) {
            alert(`Wait`);
        }
        if (!isRoadClear) {
            alert(`wait - early`);
        }
        break;
    case 'red':
        if (isRoadClear) {
            alert(`Stop - early`);
        }
        if (!isRoadClear) {
            alert(`stand and wait`);
        }
        break;
    default:
        alert('делай что хочешь!')
}