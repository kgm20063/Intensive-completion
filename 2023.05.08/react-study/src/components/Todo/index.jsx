import Button from "../Button";
import Checkbox from "../Checkbox";

import * as S from "./styled";

function Todo(props) {
  const { deleteTodo, handleSelected } = props;

  return (
    <S.Container>
      <Checkbox onChange={handleSelected} />
      <S.Title>{props.children}</S.Title>
      <S.Wrap>
        <Button title="삭제" onClick={deleteTodo}>
          ✘
        </Button>
      </S.Wrap>
    </S.Container>
  );
}

export default Todo;
