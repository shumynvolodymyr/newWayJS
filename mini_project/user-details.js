const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser)

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
} = user

const userDiv = document.getElementsByClassName('userDiv')[0];
const h2 = document.createElement('h2');
const  p= document.createElement('p');
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

button.innerText = 'post of current user';
button.className='btnClass';

userDiv.append(h2,p,button);

button.onclick=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(value => {

            const postsDiv = document.getElementsByClassName('postsDiv')[0];
            postsDiv.innerText= '';

            for (const postId of value) {
                // console.log(postId);
                const titleDiv = document.createElement('div');
                titleDiv.className='titleDiv';
                const p = document.createElement('p');
                const button = document.createElement('button');
                const detailsLink = document.createElement('a');

                p.innerText= `Title: ${postId.title}`;
                detailsLink.innerText='Post-details';
                detailsLink.href=`post-details.html?postId=${JSON.stringify(postId)}`;

                button.append(detailsLink);
                titleDiv.append(p,button);
                postsDiv.append(titleDiv);
            }
        });
}