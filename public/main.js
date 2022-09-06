
const todoLists = document.querySelector('.todo-lists')
const url = 'http://localhost:9000/todo';
let output = ""

//Get Request to read the post

 fetch(url)
 .then(res=> res.json())
 .then(data => {
  data.forEach(todo => {
   output += `<div class="card mt-4 col-md-6 bg-light" >
   <div class="card-body">
     <h5 class="card-title">${todo.task}</h5>
     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="card-link">Edit</a>
     <a href="#" class="card-link">Delete</a>
   </div>
  </div>` ;
  });
  todoLists.innerHTML = output
 })




