// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const postBox = document.getElementsByClassName('postBox')[0];


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const post of value) {

            const p = document.createElement('p');
            const btn = document.createElement('button');

            p.innerHTML = `${post.id}. ${post.title} `;
            btn.innerText = 'INFO';

            postBox.append(p)
            p.append(btn)

            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        const commentBox = document.getElementsByClassName('commentBox')[0];
                        commentBox.innerText = '';
                        for (const comment of comments) {
                            const h3 = document.createElement('h4');
                            h3.innerHTML= `${comment.id}. ${comment.body} <br>`;
                            commentBox.append(h3)
                        }
                    });
            }
        }
    });