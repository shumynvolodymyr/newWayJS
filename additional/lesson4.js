// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     }


function UserInfo(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adress = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
    this.phone = phone;
    this.website = website;
    this.company = {name: company_name, catchPhrase: catchPhrase, bs: bs};
}

let user = new UserInfo(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr},
            {titleOfAttr2: titleOfAttr2, actionOfAttr2: actionOfAttr2}
        ];
    }
}

let a = new Tag(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    'accesskey',
    'Активация ссылки с помощью комбинации клавиш.',
    'coords',
    'Устанавливает координаты активной области.'
);

let div = new Tag(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align',
    'Задает выравнивание содержимого тега <div>.',
    'title',
    'Добавляет всплывающую подсказку к содержимому.'
);

let h1 = new Tag(
    'h1',
    'TML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
    'align',
    'Задает выравнивание содержимого тега <div>.',
);

let span = new Tag(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа.',
    'hidden',
    'Скрывает содержимое элемента от просмотра.',
    'lang',
    'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'
);

let input = new Tag(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'type',
    'Сообщает браузеру, к какому типу относится элемент формы.',
    'value',
    'Значение элемента.'
);

let form = new Tag(
    'form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
    'accept-charset',
    'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
    'target',
    'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'
);

let option = new Tag(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
    'disabled',
    'Заблокировать для доступа элемент списка.',
    'label',
    'Указание метки пункта списка.'
);

let select = new Tag(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
    'multiple',
    'Позволяет одновременно выбирать сразу несколько элементов списка.',
    'required',
    'Список обязателен для выбора перед отправкой формы.'
);

console.log(a, div, h1, span, input, form, option, select);