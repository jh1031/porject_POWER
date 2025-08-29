import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = ({ isModal, modalClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleClickGoSignUp = () => {
    modalClose();
    navigate("/signup");
  };

  return (
    // isModalActive가 true일 때 "active" 클래스를 추가합니다.
    <div id="LoginPage" className={isModal ? "active" : ""}>
      <div className="loginPage">
        {/* 닫기 버튼에는 부모에게서 받은 modalClose 함수를 연결합니다. */}
        <button className="close" onClick={modalClose}>
          &times;
        </button>
        <h1>로그인</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="login-form-find">
            <button type="button" className="find">
              비밀번호 찾기
            </button>
          </div>
          <div className="sign-btn">
            <button className="login">로그인</button>
            <button className="signup" onClick={handleClickGoSignUp}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
