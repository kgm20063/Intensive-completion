import Todo from "../../../components/Todo";
import searchValue from "../../../components/SearchInput";

import * as S from "./styled";

function ItemList({ todos, deleteTodo, searchValue }) {
  return (
    <S.ItemList>
      {todos
        .filter(({ name }) => name.includes(searchValue))
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          return (
            <Todo key={id} deleteTodo={handleDeleteTodo}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}

export default ItemList;
