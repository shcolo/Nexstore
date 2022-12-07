import React from "react";
import "./Contact.css";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillGoogleCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <BsFacebook />
          <AiOutlineInstagram />
          <AiFillTwitterCircle />
          <AiFillGoogleCircle />
          <BsPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;