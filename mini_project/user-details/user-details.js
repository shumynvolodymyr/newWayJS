const user = JSON.parse(new URL(location).searchParams.get('user'));

// document.body.innerText = JSON.stringify(user,null,2);

const {
    id,
    name,
    username,
    email,
    address: {street, suite, city, zipcode, geo: {lat, lng}},
    phone,
    website,
    company: {name:companyName, catchPhrase, bs}
} = user;

const usersBox = document.getElementsByClassName('usersBox')[0];
const h2 = document.createElement('h2');
const  p= document.createElement('p');
const btn = document.createElement('button');
const button = document.createElement('button');

h2.innerText=`${id}. ${name} ${username},`;
p.innerText=`
Email: ${email},
Phone: ${phone},
Website: ${website},

Address: 
Street: ${street},
Suite: ${suite},
City: ${city},
Zipcode: ${zipcode},

Geo: 
lat: ${lat},
lng: ${lng},

Company:
name: ${companyName},
catchPhrase: ${catchPhrase},
bs: ${bs},
`;

btn.innerText = 'post of current user-details';
btn.className='btnClass';
button.className = 'go-back';
button.innerText = 'Go back!';

p.append(button,btn)
usersBox.append(h2,p);

document.getElementsByClassName('go-back')[0].addEventListener('click', () => {
    history.back();
});

btn.onclick=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {

            const postsBox = document.getElementsByClassName('postsBox')[0];
            postsBox.innerText= '';

            posts.forEach(post=>{

                const postBox = document.createElement('div');
                postBox.className='postBox';
                const p = document.createElement('p');
                const button = document.createElement('button');
                const detailsLink = document.createElement('a');

                p.innerText= `Title: ${post.title}`;
                detailsLink.innerText='Post-details';
                detailsLink.href=`../post-details/post-details.html?post=${JSON.stringify(post)}`;

                button.append(detailsLink);
                postBox.append(p,button);
                postsBox.append(postBox);
            });
        });
}