import Button from "../Button";

import * as S from "./styled";

function Todo(props) {
  const { deleteTodo } = props;

  return (
    <S.Container>
      <S.Title>{props.children}</S.Title>
      <S.Wrap>
        <Button title="등록">✔</Button>
        <Button title="삭제" onClick={deleteTodo}>
          ✘
        </Button>
      </S.Wrap>
    </S.Container>
  );
}

export default Todo;
