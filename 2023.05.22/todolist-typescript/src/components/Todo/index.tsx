import type { ChangeEvent } from 'react'

import { Todo as TodoType } from "../../types/todo";

import Button from "../Button";
import Input from "../Input";

interface TodoProps {
  name: TodoType["name"];
  isEdited: boolean;
  deleteTodo: () => void;
  handleSelected: (checked: boolean) => void;
  toggleEditTodo: () => void;
  setEditedName: (name: TodoType["name"]) => void;
  editTodo: () => void;
}

function Todo({
  name,
  isEdited,
  deleteTodo,
  handleSelected,
  toggleEditTodo,
  setEditedName,
  editTodo,
  }: TodoProps) {
  const handleEditedName = ({ target: { value }, }: ChangeEvent<HTMLInputElement>) => {
    setEditedName(value);
  }
  return (
    <li>
      {isEdited ? <Input defaultValue={name} onChange={handleEditedName}/> : <span>{name}</span>}
      <Button onClick={deleteTodo}>삭제</Button>
      <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
      {isEdited && <Button onClick={editTodo}>저장</Button>}
    </li>
  );
}
export default Todo;
