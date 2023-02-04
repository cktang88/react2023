import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchJSON, postJSON } from "../../api";
import { Todo } from "./types";

const useGetTodos = () => {
  return useQuery(["todos"], () => fetchJSON("/todos"));
};

const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: Todo) => postJSON("/todos", data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
};
export { useGetTodos, useAddTodo };
