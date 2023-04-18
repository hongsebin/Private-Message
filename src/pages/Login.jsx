import React from 'react'
import Add from "../img/image_add.png"

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private Message</span>
        <form>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          
          <button>로그인</button>
        </form>
        <p>아직 회원이 아니신가요? 회원가입</p>
      </div>
    </div>
  )
}

export default Login