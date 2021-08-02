const JSONPost = new URL(location).searchParams.get('postId');
const post = JSON.parse(JSONPost);
const {userId, id, title, body} = post;

const postDiv = document.getElementsByClassName('postDiv')[0];
const p = document.createElement('p');
const btn = document.createElement('button');

p.innerHTML = `
<b>userId:</b> ${userId},<br>
<b>id:</b> ${id},<br>
<b>title:</b> ${title},<br>
<b>body:</b> ${body}`;
btn.innerText = 'Comments';
postDiv.append(p, btn);

btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
        .then(value => {
            const commentsBox = document.getElementsByClassName('commentsBox')[0];
            commentsBox.innerText ='';
            for (let i = 0; i < value.length; i++) {
                const commentBox = document.createElement('div');
                commentBox.className='commentBox';
                const h5 = document.createElement('h5');
                h5.innerText = value[i].body
                commentBox.append(h5);
                commentsBox.append(commentBox);
            }


        })
}