// ---------------ДОП---------------
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// function foo(arr, i) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === arr[`${i}`]) {
//             const obj = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = obj;
//         }
//     }
//     console.log(arr);
// }
//
// foo([9, 8, 0, 4], 0)
// foo([9, 8, 0, 4], 1)
// foo([9, 8, 0, 4], 2)

//
// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

function validator(name) {

    const result = [];
    const splitName = name.split(' ');

    for (const element of splitName) {
        if (element) {
            result.push(element);
        }
    }
    return result.join(' ');
}

console.log(validator(n1));
console.log(validator(n2));
console.log(validator(n3));

////------------------------------------------------------------------------
// function normalizedName(name) {
//     let validName = name.trim().replace(/ +/g, ' ');
//     console.log(validName);
// }
//
// normalizedName(n1);
// normalizedName(n2);
// normalizedName(n3);
////--------------------------------------------------------------------------

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function transferZero(arr) {
//     let zero = [];
//     let numbers = [];
//     for (const number of arr) {
//        number === 0 ? zero.push(number) : numbers.push(number);
//     }
//     let res = numbers.concat(zero);
//     console.log(res);
// }
//
// transferZero([1,0,6,0,3]);
// transferZero([0,1,2,3,4]);
// transferZero([0,0,1,0]);