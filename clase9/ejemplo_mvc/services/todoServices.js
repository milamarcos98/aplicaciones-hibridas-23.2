import { readFileSync, writeFileSync } from 'fs';

// archivo json
const dataFile = './data/todos.json';

const getTodos = () => {
    const data = readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
};

const saveTodos = (todos) => {
    writeFileSync(dataFile, JSON.stringify(todos), 'utf8');
};

const createTodos = (todo) => {
  const todos = getTodos();
  const newTodo = { id: todos.length + 1, todo};
  todos.push(newTodo);
  saveTodos(todos);
  return newTodo;
};

export { getTodos, createTodos };
