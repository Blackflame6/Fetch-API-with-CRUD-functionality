const todoLists = document.querySelector(".todo-lists");
const addTodoForm = document.querySelector(".add-todo-form");
const todoInput = document.getElementById("todo-input");
const descriptionInput = document.getElementById("description-input");
const updateButton = document.querySelector(".btn");
const darkMode = document.querySelector(".my-btn-dark");
getAll();
let cardElement = "";
const url = "http://localhost:9000/todo";

//GET REQUEST TO READ THE POST

async function getAll() {
  const result = await fetch("http://localhost:9000/todo");
  const data = await result.json();
  console.log(data);
  displayTodos(data);
}
//bootsrap for layout
////////user friendly required, autofocus and darkmode
//for each, import html


const displayTodos = (data) => {
  data.forEach((todo) => {
    cardElement += `
    
    <div class=" card mt-4 col-md-6 bg-light animate__animated animate__bounceIn" >
    <div class="card-body" id=${todo.id}>
      <h5 class="card-title">${todo.task}</h5>
      <p class="card-text">${todo.description}</p>
      <i class="fa-solid fa-file-pen"></i>
      <a href="se#" class="card-link"id="edit-post">Edit</a> 
      <a href="#" class="card-link" id="delete-post">Delete</a>
      <i class="fa-solid fa-trash"></i>
    </div>
   </div>`;
  });
  todoLists.innerHTML = cardElement;
};

//DELETE REQUEST TO DELETE THE POST
//todoList is the parent elemnt of the card body
todoLists.addEventListener("click", async (e) => {
  //cancels the default behavior of  the form element,
  // in this case so prevents the form from submitting right away
  e.preventDefault();

  // to separate  delete and edit btn
  let deleteButtonPressed = (e.target.id === "delete-post");


  // id of the  parent element because it is  the only element with an id
  let id = e.target.parentElement.id;

  // if the button clicked on has an id of "delete post", then fetch  the url
  // and target the id of the parent Element, then delete the post
  if (deleteButtonPressed) {
  
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(location.reload(true));
  }
});


//UPDATE REQUEST TO EDIT POST WITH PATCH
todoLists.addEventListener("click", (e) => {


  // id of the  parent element because it is  the only element with an id
  
  let editButtonPressed = (e.target.id === "edit-post");
  let id = e.target.parentElement.id;
  if (editButtonPressed) {
console.log(editButtonPressed)
console.log(e.target.id)

    //parent element of edit post is div with card body class, which holds todo id
    const parent = e.target.parentElement;


    // title content and body content query the parent for the card title and 
    // card text, which are the todo task and description


    const titleContent = parent.querySelector(".card-title").textContent;
    const bodyContent = parent.querySelector(".card-text").textContent;

    // i made the value of the input input boxes the text content 
    // of the todo and description

    todoInput.value = titleContent;
    descriptionInput.value = bodyContent;

   
    updateButton.addEventListener("click", async (e) => {

      e.preventDefault();

      await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: todoInput.value,
          description: descriptionInput.value,
        }),
      });
    });
    fetch(`${url}/${id}`, {
      method: "DELETE",
    });

  }
});

//CREATE REQUEST WITH POST METHOD

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
  }).then(location.reload(true));
});

darkMode.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("darkmode");
  document.querySelector("h3").classList.toggle("lighter");
  document.querySelector("label").classList.toggle("lighter");
  document.querySelector(".desc").classList.toggle("lighter");
});