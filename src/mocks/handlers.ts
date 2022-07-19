import { rest } from "msw";

const todos = [];

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("/add-todo", (req, res, ctx) => {
    const { todo, author } = req.body;

    const newTodo = {
      todo,
      author,
      createdAt: Date.now(),
    };
    todos.push(newTodo);

    return res(ctx.json(newTodo));
  }),
];
