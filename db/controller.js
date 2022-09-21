const { application } = require("express");
const pool = require("./connection");
const queries = require("./queries");

const getAllTodos = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllTodos);

    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);

  }
};

const getOneTodo = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const { rows } = await pool.query(queries.getOneTodo, [id]);
    res.status(200).send(rows);
  } catch (error) {
    res.send(error.message);
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
    res.send(error.message);
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
    res.send(error.message);
  }
};

const removeTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const { rows } = await pool.query(queries.removeTodo, [id]);
    res.status(200).send();
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  removeTodo,
};