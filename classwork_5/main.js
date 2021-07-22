// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// тут ↑ напевне малося на увазі назву тексту елементу а не колір?

const main_header = document.getElementById('main_header');
main_header.innerText = 'June-2021';

// b) робить шириниу елементу ul 400px

const ul = document.getElementsByTagName('ul');

// ul[0].style.width = '400px';   // або так ↓

for (let i = 0; i < ul.length; i++) {
    ul[i].style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const linkList = document.getElementsByClassName('linkList');
for (const link of linkList) {
    link.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

const textOfListElement2 = document.getElementsByClassName('listElement2');

for (const text of textOfListElement2) {
    console.log(text.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

const li = document.getElementsByTagName('li');

for (const liElement of li) {
    liElement.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const a = document.getElementsByTagName('a');

for (const element of a) {
    element.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

const aTag = document.getElementsByTagName('a');

for (const element of aTag) {
    if (element.innerText === 'link3') {
        element.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const aTagElement = document.getElementsByTagName('a');

for (const a of aTagElement) {
    a.classList.add(`element_${a.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt();

// const subHeader = document.getElementsByClassName('sub-header');
//
// for (const subHeaderElement of subHeader) {
//     const color = prompt(`Please enter your backgroung color for ${subHeaderElement.innerText}`);
//     subHeaderElement.style.background = `${color}`;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const subHeader = document.getElementsByClassName('sub-header');

for (const subHederElement of subHeader) {
    if (subHederElement.innerText === 'content 2 segment') {
        const color = prompt('Please enter your backgroung color for content 2 segment')
        subHederElement.style.color = `${color}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const content_1 = document.getElementsByClassName('content_1');

for (const content of content_1) {
    content.innerText = prompt('enter your text');
}

// l) отримати елементи p та змінити їм padding на 20px

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

const text2 = document.getElementsByClassName('text2');

for (const element of text2) {
    element.innerText = 'June-2021';
}

