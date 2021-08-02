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

const div = document.createElement('div');
const h1 = document.createElement('h1');
const  h3= document.createElement('h3');
const button = document.createElement('button');

h1.innerText=`${id}. ${name} ${username},`;
h3.innerText=`
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

div.append(h1,h3,button);
document.body.append(div);

button.onclick=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(value => {

            const postDiv = document.createElement('div');
            postDiv.className='postDiv';

            for (const postId of value) {
                const titleDiv = document.createElement('div');
                titleDiv.className='titleDiv';
                const p = document.createElement('p');
                const button = document.createElement('button');
                button.innerText='post-details';

                p.innerText= `Title: ${postId.title}`;
                titleDiv.append(p,button);
                postDiv.append(titleDiv);
                div.append(postDiv);
            }
        })
}