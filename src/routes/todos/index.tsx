import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useForm, SubmitHandler } from "react-hook-form";
import { fetchJSON, postJSON } from "../../api";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  todo: z
    .string()
    .min(10, { message: "Todo text must be longer than 10 characters." }),
  author: z
    .string()
    .min(10, { message: "Author name must be longer than 10 characters." }),
});

type Inputs = {
  todo: string;
  author: string;
};

function Todos() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const {
    isLoading,
    error,
    data: todos,
  } = useQuery(["todos"], () => fetchJSON("/todos"));

  const addTodoMutation = useMutation(
    (data: Inputs) => postJSON("/todos", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    addTodoMutation.mutate(data);

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred: " + error.message</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Input your TODO"
          {...register("todo", { required: true, minLength: 10 })}
        />
        {errors.todo?.message && <p>{errors.todo?.message}</p>}
        <br />

        <input
          placeholder="Enter author name"
          {...register("author", { required: true, minLength: 10 })}
        />
        {errors.author?.message && <p>{errors.author?.message}</p>}
        <br />
        <input type="submit" value="Add todo" />
      </form>
      <br />
      <div>
        {addTodoMutation.isLoading ? (
          "Adding todo..."
        ) : (
          <>
            {addTodoMutation.isError ? (
              <div>An error occurred: {addTodoMutation.error.message}</div>
            ) : null}

            {addTodoMutation.isSuccess ? <div>Todo added!</div> : null}
          </>
        )}
      </div>
      <br />
      <TodosList todos={todos} />
    </div>
  );
}

const TodosList = ({ todos }: { todos: Inputs[] }) => {
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
