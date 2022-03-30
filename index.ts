import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((res) => {
  const todo = res.data as Todo;
  console.log(todo);
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logTodo(ID, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    to do with ${id} with title ${title} is ${completed}
    `);
};
