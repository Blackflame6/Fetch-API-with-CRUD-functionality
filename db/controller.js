const { application } = require("express");
const pool = require("./connection");
const queries = require("./queries");

const getAllTodos = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllTodos);

    res.status(200).send(rows);
  } catch (error) {
    console.log(error);
    // res.send(console.error(error.message))
  }
};

const getOneTodo = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const { rows } = await pool.query(queries.getOneTodo, [id]);
    res.status(200).send(rows);
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  const { task, description} = req.body;
  try {
    const { rows } = await pool.query(queries.createTodo, [
      task,
      description
      
    ]);
    res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { task, description } = req.body;

  try {
    const { rows } = await pool.query(queries.updateTodo, [
      task,
      description,
      id,
    ]);
    res
      .status(200)
      .send(`item changed. Task: '${task}'.  Description: '${description}.'`);
  } catch (error) {
    console.log(error);
  }
};

const removeTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const { rows } = await pool.query(queries.removeTodo, [id]);
    res.status(200).send(`Todo with ID '${id}' removed.`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  removeTodo,
};