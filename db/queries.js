const getAllTodos = ('SELECT * FROM todo');
const getOneTodo = ('SELECT * FROM todo WHERE id = $1');
const createTodo = ('INSERT INTO todo (task, description) VALUES ($1, $2)')
const updateTodo = ('UPDATE todo SET task = $1, description = $2 WHERE id = $3') 
const removeTodo = ('DELETE FROM todo WHERE id = $1')





module.exports =  {
  getAllTodos,
  getOneTodo, 
  createTodo,
  updateTodo,
  removeTodo
}