// `- створити функцію яка обчислює та повертає площу прямокутника висотою

// function rectangle(height, width) {
//     return height * width
// }
// let sRectangle = rectangle(5,20)
// console.log(sRectangle);

// - створити функцію яка обчислює та повертає площу кола

// function circle(a, h) {
//     return 1/2*(a * h)
// }
//
// let sCircle = circle(20, 2);
// console.log(sCircle);

// - створити функцію яка обчислює та повертає площу циліндру
//
// function cylinder(R, h) {
//     let s1 = 2 * Math.PI * R * h;
//     let s2 = 2 * Math.PI * R * (R + h);
//     return {
//         sBokove: s1,
//         sPovne: s2
//     };
// }
//
// let sCylinder = cylinder(5, 10);
// console.log(`
// Площа бокової поверхні циліндра: ${sCylinder.sBokove};
// Площа повної поверхні циліндра: ${sCylinder.sPovne};
// `);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxNum() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num
//         }
//         if (num < min) {
//             min = num
//         }
//     }
//     console.log(`Max number: ${max}`);
//     return min;
// }
//
// maxNum(26, 14, 5, 1, 6, 13);


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function createDiv(text) {
//     document.write(`<div>${text}</div>`)
// }
// createDiv(`Lorem ipsum dolor sit amet.`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let li = 3;
//
// function createUl(text) {
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`);
// }
//
// createUl('Firework');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUlsLi(text, li) {
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//        document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// createUlsLi(`Hello`,5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`

function ListBuilder(array) {
    document.write(`<div><ul>`);
    for (const arr of array) {
        document.write(`<li>${arr}</li>`)
    }
    document.write(`</ul></div>`)
}

ListBuilder([true, 123, 'music', 3, 'Silvestr']);