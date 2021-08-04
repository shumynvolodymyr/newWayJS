const post = JSON.parse(new URL(location).searchParams.get('post'));
const {userId, id, title, body} = post;

const postsBox = document.getElementsByClassName('postsBox')[0];
const p = document.createElement('p');
const button = document.createElement('button');
const btn = document.createElement('button');

p.innerHTML = `
<h3>Title: ${title},</h3>
<h4>userId: ${userId},</h4>
<h4>id:</b> ${id},</h4>
<h4>body:</b> ${body}</h4>`;
button.className = 'go-back';
button.innerText = 'Go back!';
btn.innerText = 'Comments';
postsBox.append(p, button, btn);

document.getElementsByClassName('go-back')[0].addEventListener('click', () => {
    history.back();
});


btn.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
        .then(comments => {

            const commentsBox = document.getElementsByClassName('commentsBox')[0];
            commentsBox.innerHTML = '';

            comments.forEach(comment => {

                const commentBox = document.createElement('div');
                commentBox.className = 'commentBox';
                const h5 = document.createElement('h5');
                h5.innerText = comment.body
                commentBox.append(h5);
                commentsBox.append(commentBox);
            })
        })
});