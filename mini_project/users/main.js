// В index.html
// 1 получить массив объектов user-details с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user-details в index.html. Отдельный блок для каждого user-details.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details-details.html, которая имеет детальную информацию про объект на который кликнули
//
// На странице user-details-details.html:
// 4 Вывести всю, без исключения, информацию про объект user-details на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user-details", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user-details - по 2 в ряд. кнопки/ссылки находяться под информацией про user-details.
// user-details-details.html - блок с информацией про user-details вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user-details,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        const usersBox = document.getElementById('users-Box')

        users.forEach(user=>{
            const {id, name} = user;
            const userBox = document.createElement('div');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const detailsLink = document.createElement('a');

            userBox.className = 'userBox'
            p.innerText = `${id}. ${name}`;
            detailsLink.innerText = 'Details';
            detailsLink.href = `../user-details/user-details.html?user=${JSON.stringify(user)}`;

            userBox.append(p,button);
            button.append(detailsLink);
            usersBox.append(userBox);
        })
    })