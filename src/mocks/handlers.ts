import { rest } from "msw";

const todos = [];

const ARTIFICIAL_DELAY = 500;

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.delay(ARTIFICIAL_DELAY), ctx.json(todos));
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

    return res(ctx.delay(ARTIFICIAL_DELAY), ctx.json(newTodo));
  }),
];
