const todoLists = document.querySelector(".todo-lists");
const addTodoForm = document.querySelector(".add-todo-form");
const todoInput = document.getElementById('todo-input')
const descriptionInput = document.getElementById('description-input')
let output = "";
const displayPosts = (posts) => {
  posts.forEach((todo) => {
    output += `<div class="card mt-4 col-md-6 bg-light" >
    <div class="card-body">
      <h5 class="card-title">${todo.task}</h5>

      <p class="card-text">${todo.description}</p>
      <a href="#" class="card-link">Edit</a>
      <a href="#" class="card-link">Delete</a>
    </div>
   </div>`;
  });
  todoLists.innerHTML = output;
};
const url = "http://localhost:9000/todo";
//Get Request to read the post

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    displayPosts(data);
    console.log(data);
  });

//Create new post with POST Method

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
 
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: todoInput.value,
      descriptio: descriptionInput.value
      
    })
  });
});
