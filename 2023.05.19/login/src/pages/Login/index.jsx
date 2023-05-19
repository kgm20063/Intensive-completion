import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";

function Login({ name, id, password }) {
  const [valueName, setValueName] = useState("");
  const [valueId, setValueId] = useState("");
  const [valuePw, setValuePw] = useState("");

  return (
    <S.Container>
      <S.Form>
        <S.Title>로그인</S.Title>
        <S.Input type="text" className="name" placeholder="이름" minlength="2" maxlength="5" value={name} />
        <S.Input type="text" className="id" placeholder="아이디" minlength="4" value={id} />
        <S.Input type="password" className="password" placeholder="비밀번호" minlength="8" value={password} />
        <S.Button type="submit">
          <Link to="/Main">로그인</Link>
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Login;
