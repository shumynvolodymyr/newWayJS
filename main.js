//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// console.log(hello);
// alert(hello);
// document.write(hello);
//
// let owu = 'owu';
// console.log(owu);
// alert(owu);
// document.write(owu);
//
// let com = 'com';
// console.log(com);
// alert(com);
// document.write(com);
//
// let ua = 'ua';
// console.log(ua);
// alert(ua);
// document.write(ua);
//
// let one = 1;
// console.log(one);
// alert(one);
// document.write(one);
//
// let ten = 10;
// console.log(ten);
// alert(ten);
// document.write(ten);
//
// let nineHundredNinetyNine = -999;
// console.log(nineHundredNinetyNine);
// alert(nineHundredNinetyNine);
// document.write(nineHundredNinetyNine);
//
// let oneHundredTwentyThree = 123;
// console.log(oneHundredTwentyThree);
// alert(oneHundredTwentyThree);
// document.write(oneHundredTwentyThree);
//
// let pNumber = 3.14;
// console.log(pNumber);
// alert(pNumber);
// document.write(pNumber);
//
// let twoPointSeven = 2.7;
// console.log(twoPointSeven);
// alert(twoPointSeven);
// document.write(twoPointSeven);
//
// let sixteen = 16;
// console.log(sixteen);
// alert(sixteen);
// document.write(sixteen);
//
// let tru = true;
// console.log(tru);
// alert(tru);
// document.write(tru);
//
// let fals = false;
// console.log(fals);
// alert(fals);
// document.write(fals);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

// hello = 'bye';
// owu = 'okten';
// com = 'cz';
// ua = 'sk';
// one = 13;
// ten = 'name';
// nineHundredNinetyNine = 'nineHundredNinetyNine';
// oneHundredTwentyThree = 365;
// pNumber = false;
// twoPointSeven = true;
// sixteen = 200;
// tru = 'true';
// fals = '888';

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(one);
// console.log(ten);
// console.log(nineHundredNinetyNine);
// console.log(oneHundredTwentyThree);
// console.log(pNumber);
// console.log(twoPointSeven);
// console.log(sixteen);
// console.log(tru);
// console.log(fals);
//
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(nineHundredNinetyNine);
// alert(oneHundredTwentyThree);
// alert(pNumber);
// alert(twoPointSeven);
// alert(sixteen);
// alert(tru);
// alert(fals);
//
// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(one);
// document.write(ten);
// document.write(nineHundredNinetyNine);
// document.write(oneHundredTwentyThree);
// document.write(pNumber);
// document.write(twoPointSeven);
// document.write(sixteen);
// document.write(tru);
// document.write(fals);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// let firstName = 'Volodymyr';
// let lastName = 'Shumyn';
//
// let person = firstName + ' ' + lastName;
// console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('Your name?');
// let lastName = prompt('Your last name?');
// let age = prompt('Your age?');
//
// document.write(`Вітаю ${name} ${lastName}. Тобі ${age} років.`);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

//     let a = 100; let b = '100'; let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 === 6 -> false
// 5 >= 6 -> false
// 5 <= 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 !== 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.

// console.log(132 > 100 && 45 < 12 );  false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0');
// console.log(!!'null'); true;
// console.log(!!'undefined'); true
// console.log(!!(3/'owu')); false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false