import React from 'react'
import Add from "../img/image_add.png"

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private Message</span>
        <span className="title">회원가입</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
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

