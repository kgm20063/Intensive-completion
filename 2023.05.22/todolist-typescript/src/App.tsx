import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

import { v4 as uuidv4 } from "uuid";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

import type { Todo } from "./types/todo";
import Button from "./components/Button";

function App() {
  const [todoName, setTodoName] = useState<Todo["name"]>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);
  const [editedTodoId, setEditedTodoId] = useState<Todo['id'] | undefined>();
  const [editedName, setEditedName] = useState<Todo['name']>("");

  const handleTodoName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTodoName(value);
  };

  const handleSearchValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos((prevState) => {
      const filterTodos = [...prevState].filter((todo) => todo.id !== id);
      return filterTodos;
    });
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    setTodos((prevState) => [...prevState, { id: uuidv4(), name: todoName }]);
    setTodoName("");
  };

  const toggleEditTodo = (id: Todo['id']) => {
    setEditedTodoId(prevState => (prevState === id ? undefined : id));
  };

  const handleEditedName = (name: Todo['name']) => {
    setEditedName(name)
  }

  const editTodo = () => {
    setTodos(prevState => {
      return prevState.map(({ id, name }) => {
        if (id === editedTodoId) {
          return { id, name: editedName }
        }
        return { id, name };
      });
    });
    setEditedTodoId(undefined)
    setEditedName("")
  };

  return (
    <div className="App">
      <Input value={todoName} onChange={handleTodoName} onKeyUp={handleEnterPress} />
      <Button onClick={addTodo}>Todo 추가</Button>
      <Input onChange={handleSearchValue} />
      <TodoList
        todos={todos}
        searchValue={searchValue}
        editedTodoId={editedTodoId}
        deleteTodo={handleDeleteTodo}
        setSelectedTodoIds={setSelectedTodoIds}
        toggleEditTodo={toggleEditTodo}
        setEditedName={handleEditedName}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
