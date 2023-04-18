import React from 'react'
import Attach from "../img/attach.png";
import Img from "../img/img.png";
import Send from "../img/send.png";

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='메시지를 입력하세요...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type='file' style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>
          <img src={Send} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Input