import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAddTodo, useGetTodos } from "./query";
import { Todo } from "./types";

const schema = z.object({
  todo: z
    .string()
    .min(10, { message: "Todo text must be longer than 10 characters." }),
  author: z
    .string()
    .min(10, { message: "Author name must be longer than 10 characters." }),
});

function Todos() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Todo>({
    resolver: zodResolver(schema),
  });

  const { isLoading, error, data: todos } = useGetTodos();

  const addTodo = useAddTodo();

  const onSubmit: SubmitHandler<Todo> = (data) => addTodo.mutate(data);

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred: " + error.message</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Input your TODO" {...register("todo")} />
        {errors.todo?.message && <p>{errors.todo?.message}</p>}
        <br />

        <input placeholder="Enter author name" {...register("author")} />
        {errors.author?.message && <p>{errors.author?.message}</p>}
        <br />
        <input type="submit" value="Add todo" />
      </form>
      <br />
      <div>
        {addTodo.isLoading ? (
          "Adding todo..."
        ) : (
          <>
            {addTodo.isError ? (
              <div>An error occurred: {addTodo.error.message}</div>
            ) : null}

            {addTodo.isSuccess ? <div>Todo added!</div> : null}
          </>
        )}
      </div>
      <br />
      <TodosList todos={todos} />
    </div>
  );
}

const TodosList = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      <h2>TODOS</h2>
      <div>
        {todos.map((e) => (
          <p>{JSON.stringify(e)}</p>
        ))}
      </div>
    </>
  );
};
export default Todos;
