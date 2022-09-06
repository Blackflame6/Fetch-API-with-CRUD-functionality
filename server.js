const pool = require("./db/connection");
const express = require("express");
const cors = require('cors')
const app = express();
const controller = require("./db/controller");
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors())
app.use(express.static("public"));

app.get("/todo", controller.getAllTodos);
app.get("/todo/:id", controller.getOneTodo);
app.post("/todo", controller.createTodo);
app.patch("/todo/:id", controller.updateTodo);
app.delete("/todo/:id", controller.removeTodo);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
