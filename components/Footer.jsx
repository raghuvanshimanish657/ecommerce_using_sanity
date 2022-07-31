import React from 'react';
import { AiFillLinkedin, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Quick-Headphone-Store All rights reserverd</p>
      <p className="icons">
        <AiFillLinkedin />
        <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default Footer