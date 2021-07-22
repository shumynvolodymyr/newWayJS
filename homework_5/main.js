// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

const content = document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"

const rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Правила бійцівського клубу:';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Запамятай: Никому, Никому не рассказывай о Бойцовском клубе!!!'

// -- змініть кожному елементу колір фону на червоний

function changeBackground(color) {
    const allSelector = document.querySelectorAll('*');
    for (const element of allSelector) {
        element.style.background = `${color}`
    }
}

changeBackground('red');

// -- змініть кожному елементу колір тексту на синій

function changeTextColor(color) {
    const allSelector = document.querySelectorAll('*');
    for (const element of allSelector) {
        element.style.color = `${color}`
    }
}

changeTextColor('blue');

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

const allRules = document.getElementById('rules');
console.log(allRules);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

function rulesClass(className) {
    let rules = document.getElementsByClassName(`${className}`);

    for (const rule of rules) {

        const div = document.createElement('div')
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');

        btn1.innerText = 'Text';
        btn2.innerText = 'Custom Text';

        rule.appendChild(div);
        div.appendChild(btn1);
        div.appendChild(btn2);

        btn1.onclick = function () {
            console.log(rule.innerText);
        };

        btn2.onclick = function () {
            const customText = prompt('Please Enter your text!')
            console.log(customText);
        };
    }
}

rulesClass('fc_rules');

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const fcRules = document.getElementsByClassName('fc_rules');

for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
    fcRule.style.background = 'white';
}

