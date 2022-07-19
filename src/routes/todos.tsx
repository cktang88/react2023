import { useQuery } from "@tanstack/react-query";

function Todos() {
  const { isLoading, error, data } = useQuery(["todos"], () =>
    fetch("/todos").then((res) => res.json())
  );

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred: " + error.message</div>;

  /**TODO: add proper react-hook-form that submits to add a todo */
  return (
    <div>
      <input></input>
      <input></input>
      <button>Add todo</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
export default Todos;
