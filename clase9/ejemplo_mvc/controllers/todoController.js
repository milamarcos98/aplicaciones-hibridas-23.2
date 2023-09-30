import { getTodos, createTodos } from '../services/todoServices.js';

const getTodosController = (req, res) => {
  const todos = getTodos();
  res.json(todos);
};

const createTodosController = (req, res) => {
  const { todo } = req.body;
  const newTodo = createTodos(todo);
  res.json(newTodo);
};

export { getTodosController, createTodosController };
