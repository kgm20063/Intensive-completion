import { useState } from "react";

import * as S from "./styled";

import { memberList } from "../../constants/member-list";

function List() {
  const [list, setList] = useState(memberList);
  return (
    <S.Container>
      <S.ButtonBox>
        <S.Button>id정렬</S.Button>
        <S.Button>name정렬</S.Button>
        <S.Button>level정렬</S.Button>
      </S.ButtonBox>
      <S.ListBox>
        <S.ListItem>
          <S.Desc>id</S.Desc>
          <S.Desc>name</S.Desc>
          <S.Desc>level</S.Desc>
        </S.ListItem>
        {list.map(({ id, name, level }) => {
          return (
            <S.ListItem key={id}>
              <S.Desc>{id}</S.Desc>
              <S.Desc>{name}</S.Desc>
              <S.Desc>{level || "없음"}</S.Desc>
            </S.ListItem>
          );
        })}
      </S.ListBox>
    </S.Container>
  );
}

export default List;
