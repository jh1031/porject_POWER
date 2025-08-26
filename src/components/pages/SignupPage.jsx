import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [gender, setGender] = useState("man");
  const [birthDate, setBirthDate] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordCheck = (e) => setPasswordCheck(e.target.value);

  return (
    <div id="SignupPage">
      <div className="sign-name">
        <p>이름</p>
        <input type="text" value={name} onChange={handleChangeName} />
      </div>
      <div className="sign-email">
        <p>이메일</p>
        <input type="text" value={email} />
        <button className="check">중복확인</button>
      </div>
      <div className="sign-password">
        <p>비밀번호</p>
        <input type="password" value={password} />
      </div>
      <div className="sign-passwordCheck">
        <p>비밀번호 확인</p>
        <input type="password" value={passwordCheck} />
      </div>
      <div className="sign-nickname">
        <p>닉네임</p>
        <input type="text" value={nickName} />
        <button className="check">중복확인</button>
      </div>
      <div className="sign-gender">
        <p>성별</p>
        <button className="man">남성</button>
        <button className="woman">여성</button>
      </div>
      <div className="sign-birthdate">
        <p>생년월일</p>
        <input type="date" value={birthDate} />
      </div>
      <button className="signup">회원가입</button>
    </div>
  );
};

export default SignupPage;
