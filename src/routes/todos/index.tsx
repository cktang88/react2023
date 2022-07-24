import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useForm, SubmitHandler } from "react-hook-form";
import { fetchJSON, postJSON } from "../../api";

type Inputs = {
  todo: string;
  author: string;
};
function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const {
    isLoading,
    error,
    data: todos,
  } = useQuery(["todos"], () => fetchJSON("/todos"));

  // Mutations
  const addTodoMutation = useMutation(
    (data: Inputs) => postJSON("/todos", data),
    {
      onSuccess: () => {
        // Invalidate and refetch
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
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="Input your TODO"
          {...register("todo", { required: true, minLength: 10 })}
        />
        {errors.todo && <span>{errors.todo.message}</span>}
        <br />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue="Enter author name"
          {...register("author", { required: true, minLength: 10 })}
        />
        {/* errors will return when field validation fails  */}
        {errors.author && <span>{errors.author.message}</span>}
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
      <h2>TODOS</h2>
      <div>
        {todos.map((e) => (
          <p>{JSON.stringify(e)}</p>
        ))}
      </div>
    </div>
  );
}
export default Todos;
