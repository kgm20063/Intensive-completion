import type { DispatchSetStateAction } from "../../types/util";
import type { Todo as TodoType } from "../../types/todo";
import Todo from "../Todo";
// import type { Todo, DispatchSetStateAction } from "../../types";

interface TodoListProps {
  todos: TodoType[];
  searchValue: string;
  deleteTodo: (id: TodoType["id"]) => void;
  editedTodoId: TodoType['id'] | undefined;
  setSelectedTodoIds: DispatchSetStateAction<TodoType["id"][]>;
  toggleEditTodo: (id: string) => void;
  setEditedName: (name: TodoType['name']) => void
  editTodo: () => void;
}

function TodoList({
  todos,
  searchValue,
  deleteTodo,
  setSelectedTodoIds,
  toggleEditTodo,
  editedTodoId,
  setEditedName,
  editTodo,
}: TodoListProps) {
  return (
    <ul>
      {todos
        .filter(({ name }) => name.includes(searchValue))
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          const handleSelected = (checked: boolean) => {
            if (checked) {
              setSelectedTodoIds((prevState) => [...prevState, id]);
            } else {
              setSelectedTodoIds((prevState) => prevState.filter((prevId) => prevId !== id));
            }
          };

          const handleEditTodo = () => {
            toggleEditTodo(id);
          }

          const isEdited = editedTodoId === id;

          return (
            <Todo
              key={id}
              name={name}
              isEdited={isEdited}
              deleteTodo={handleDeleteTodo}
              handleSelected={handleSelected}
              toggleEditTodo={handleEditTodo}
              setEditedName={setEditedName}
              editTodo={editTodo}
            />
          );
        })}
    </ul>
  );
}

export default TodoList;
