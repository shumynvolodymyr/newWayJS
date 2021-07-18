// - створити функцію яка приймає масив та виводить його

// function arrayOtput (arr) {
//     for (const arrElement of arr) {
//         document.write(`<h4>${arrElement}</h4>`)
//     }
// }
// arrayOtput(['name', 'car',13]);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(a, b, c) {
//     let min = arguments[0];
//     for (const num of arguments) {
//         if (a < min) {
//             min = a
//         }
//         if (b < min) {
//             min = b
//         }
//         if (c < min) {
//             min = c
//         }
//     }
//     console.log(`Min number: ${min}`)
//     return min;
// }
//
// minNumber(2, 7, 3)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumb(a, b, c) {
//     let max = arguments[0];
//     if (a > max) {
//         max = a
//     }
//     if (b > max) {
//         max = b
//     }
//     if (c > max) {
//         max = c
//     }
//     console.log(`Max number: ${max}`)
//     return max;
// }
//
// maxNumb(2, 7, 3)

// - створити функцію яка повертає найбільше число з масиву

// function maxNumOfArr(array) {
//     let max = array[0];
//     for (const arr of array) {
//         if (arr > max) {
//             max = arr
//         }
//     }
//     console.log(`Max: ${max}`);
//     return max;
// }
//
// maxNumOfArr([16, 1, 5, 68, 3, 58]);

// - створити функцію яка повертає найменьше число з масиву

// function minNumbOfArray(arr) {
//     let min = arr[0];
//     for (const number of arr) {
//         if (min > number) {
//             min = number;
//         }
//     }
//     console.log(`Min: ${min}`);
//     return min;
// }
//
// minNumbOfArray([16, 1, 5, 68, 3, 58]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function calc(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     console.log(res);
//     return res;
// }
//
// calc([10, 1, 9, 60, 30, 40]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arithmetic(arr) {
//     let count = 0;
//     for (const arrElement of arr) {
//         count += arrElement/arr.length;
//     }
//     console.log(count);
//     return count;
// }
//
// arithmetic([10,5,15]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

// function randomNumb() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     console.log(arr);
//     return arr;
// }
//
// randomNumb();

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function arrayOfKeys(arr) {
//     for (const keys of arr) {
//         for (const key in keys) {
//             console.log(key)
//         }
//     }
// }
//
// arrayOfKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]);

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function arrayOfValues(arr) {
//     for (const keys of arr) {
//         for (const key in keys) {
//             console.log(keys[key])
//         }
//     }
// }
//
// arrayOfValues([{name: 'Dima', age: 13}, {model: 'Camry'}]);

//
//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function myFunc(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i===j) {
//                 newArr.push(arr1[i] + arr2[j])
//             }
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }
//
// myFunc([1, 2, 3, 4], [2, 3, 4, 5]);

//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
//
// for (let i = 1; i <= 3; i++) {
//    arr.push(i);
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
//     arr.reverse();
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1,2,3];
// for (let i = 3; i <= 6; i++) {
//     arr.push(i);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1,2,3];
// for (let i = 6; i > 3; i--) {
//     arr.unshift(i);
// }
// console.log(arr);


//
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3,5);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,2);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,4,'a','b','c');
// console.log(arr);

//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];

for (const value of arr) {
    arr2.push(value);
}
console.log(arr2);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.