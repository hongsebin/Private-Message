import React from 'react'
import Add from "../img/image_add.png"

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private Message</span>
        <form>
          <input type="text" placeholder="이름" />
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>프로필사진 추가</span>
          </label>
          <button>회원가입</button>
        </form>
        <p>이미 회원이신가요? 로그인</p>
      </div>
    </div>
  )
}

export default Register