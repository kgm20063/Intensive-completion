import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

  function handleClick() {
    if (userName !== "" && userId !== "" && userPw !== "") {
      if (userName === regExp) {
        alert("특수문자 입력 불가능");
      }
    } else {
      alert("입력 안된 곳 있음");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form>
        <div className="inputWrap">
          <input type="text" name="name" id="name" required maxLength={5} minLength={2} onChange={setUserName} />
          <label for="name">NAME</label>
        </div>
        <div className="inputWrap">
          <input type="text" name="id" id="id" required minLength={4} onChange={setUserId} />
          <label for="id">ID</label>
        </div>
        <div className="inputWrap">
          <input type="password" name="password" id="password" required minLength={8} onChange={setUserPw} />
          <label for="password">PASSWORD</label>
        </div>
        <div className="btnWrap">
          <button type="submit" onClick={handleClick}>
            <Link to="./Main">
              <p>Sign in</p>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
