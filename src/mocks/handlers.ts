import { rest } from "msw";

const todos = [];

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    // artificially slow
    return res(ctx.delay(1000), ctx.json(todos));
  }),
  rest.post("/todos", (req, res, ctx) => {
    const { todo, author } = req.body;

    const newTodo = {
      todo,
      author,
      createdAt: Date.now(),
    };
    todos.push(newTodo);
    console.log(todos);

    // artificially slow
    return res(ctx.delay(1000), ctx.json(newTodo));
  }),
];
