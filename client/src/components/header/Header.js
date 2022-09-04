import React from "react";
import "./Header.scss";
import { FiSearch } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <img src="/insta_logo.PNG" alt="instagram" />
        </div>

        <div className="header_middle">
          <input type="text" placeholder="Search" />
          <FiSearch className="header_middle_search_icon" />
        </div>

        <div className="header_right">
          <HiHome className="header_right_icon" />
          <RiMessengerLine className="header_right_icon" />
          <CgAddR className="header_right_icon" />
          <AiOutlineCompass className="header_right_icon" />
          <AiOutlineHeart className="header_right_icon" />
          <img src="https://picsum.photos/200/300?random=1" alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
