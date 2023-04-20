import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }catch(err){
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private Message</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          
          <button>로그인</button>
          {err && <span className='err'>다시 입력해주세요</span>}
        </form>
        <p>아직 회원이 아니신가요? <Link to="/register">회원가입</Link></p>
      </div>
    </div>
  )
}

export default Login