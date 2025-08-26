import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = ({ isModal, modalClose }) => {
  const navigate = useNavigate();

  const ModalRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleClickGoFind = () => navigate();
  const handleClickGoSignUp = () => navigate("/signup");

  const modal = () => {
    if (isModal) {
      ModalRef.current.style.display = "block";
    } else {
      ModalRef.current.style.display = "none";
    }
  };
  useEffect(() => {
    modal();
  }, [isModal]);

  return (
    <div id="LoginPage" ref={ModalRef}>
      <div className="loginPage">
        <button className="close" onClick={modalClose}>
          닫기
        </button>
        <h1>로그인</h1>
        <div className="login-from">
          <div className="login-from-email">
            <p className="login-email">이메일</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="login-from-password">
            <p className="login-password">비밀번호</p>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="login-from-find">
            <button className="find" onClick={handleClickGoFind}>
              비밀번호 찾기
            </button>
          </div>
        </div>
        <div className="sign-btn">
          <button className="login">로그인</button>
          <button className="signup" onClick={handleClickGoSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
