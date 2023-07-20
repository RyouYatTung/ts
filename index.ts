import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/comments/1";

interface Todo {
  id: number;
  name: string;
  body: string;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const name = todo.name;
  const body = todo.body;

  logTodo(id, name, body);
});

const logTodo = (id: number, name: string, body: string) => {
  console.log(
    `The todo with:${id}
has a name:${name}
body:${body}
`
  );
};
