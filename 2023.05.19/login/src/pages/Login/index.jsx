import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";

function Login() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

  function handleClick() {
    if (userName !== "" && userId !== "" && userPw !== "") {
      if (userName.match(regExp)) {
        alert("특수문자 입력 불가능");
      }
    } else {
      alert("입력 안된 곳 있음");
    }
  }

  return (
    <S.Container>
      <S.Form>
        <S.Title>로그인</S.Title>
        <S.Input type="text" className="name" placeholder="이름" maxLength={5} minLength={2} onChange={setUserName} />
        <S.Input type="text" className="id" placeholder="아이디" minLength={4} onChange={setUserId} />
        <S.Input type="password" className="password" placeholder="비밀번호" minLength={8} onChange={setUserPw} />
        <S.Button type="submit" onClick={handleClick}>
          로그인
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Login;
