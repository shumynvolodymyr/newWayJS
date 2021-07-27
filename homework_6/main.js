// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (let i = 0; i < value.length; i++) {
//             const div = document.createElement('div');
//             document.body.append(div);
//             div.innerText = ` ${value[i].id} . ${value[i].title}`
//         }
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
            for (const comment of comments) {

                const div = document.createElement('div');
                document.body.append(div);
                const {id, name, email, body} = comment;
                div.innerHTML = `<h2> ${id}. ${name},</h2>
            <h3>Email: ${email}</h3>`;

                const button = document.createElement("button");
                button.innerText = 'Body';
                div.append(button);

                let h4 = document.createElement('h4');

                    button.onclick = () => {
                       h4.innerHTML = ''
                        h4.append(comment.body)
                        div.append(h4)

                }
            }
        }
    );

