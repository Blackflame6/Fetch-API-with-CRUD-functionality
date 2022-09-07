const todoLists = document.querySelector(".todo-lists");
const addTodoForm = document.querySelector(".add-todo-form");
const todoInput = document.getElementById("todo-input");
const descriptionInput = document.getElementById("description-input");
const updateButton = document.querySelector(".btn");
let output = "";


const displayTodos = (posts) => {
  posts.forEach((todo) => {
    output += `<div class="card mt-4 col-md-6 bg-light" >
    <div class="card-body" id=${todo.id}>
      <h5 class="card-title">${todo.task}</h5>

      <p class="card-text">${todo.description}</p>
      <a href="se#" class="card-link"id="edit-post">Edit</a>
      <a href="#" class="card-link" id="delete-post">Delete</a>
    </div>
   </div>`;
    console.log(todo.id);
  });
  todoLists.innerHTML = output;
};
const url = "http://localhost:9000/todo";
//Get Request to read the post

todoLists.addEventListener("click", (e) => {
  e.preventDefault();

  let editButtonPressed = e.target.id == "edit-post";
  let deleteButtonPressed = e.target.id == "delete-post";
  let id = e.target.parentElement.id;

  if (deleteButtonPressed) {
    console.log(id);
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())

      .then(location.reload(true));
  }

  if (editButtonPressed) {
    const parent = e.target.parentElement;
    const titleContent = parent.querySelector(".card-title").textContent;
    const bodyContent = parent.querySelector(".card-text").textContent;
    console.log(titleContent, bodyContent);
    todoInput.value = titleContent;
    descriptionInput.value = bodyContent;
  }
  updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: todoInput.value,
        description: descriptionInput.value,
      }),
    })
      .then((res) => res.json())
      .then(location.reload(true));
  });
});

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    displayTodos(data);
    // console.log(data);
  });

//Create new post with POST Method

addTodoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: todoInput.value,
      description: descriptionInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      inputArr = [];
      inputArr.push(data);
      displayTodos(inputArr);
    })
    .then(location.reload(true));
});
