"use strict";
//  fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json() )
// .then(response=> console.log(response))

const posts = document.getElementById('posts');
const button = document.getElementById('infoPosts')

const URL = "https://jsonplaceholder.typicode.com/posts"

const getPosts = ()=>{
  fetch(`${URL}`)
    .then(response=> response.json())
    .then(data =>{
    data.forEach(element => {
      postNew(element)          
    });
  })
}

function postNew({title, body}) {
  const row = document.createElement('div');
  row.innerHTML = `  
  <div class="card" style="width: 18rem;"> 
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>        
     `;
  posts.appendChild(row);
};

button.addEventListener("click", ()=> getPosts())
























