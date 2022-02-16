import React from "react";
import Image from "next/image";
import Logo from "../../public/vectors/logo.svg";
import NotificationIcon from "../atoms/vectors/NotificationIcon";
import CaretDownIcon from "../atoms/vectors/CaretDownIcon";

const index = () => {
  return (
    <div className="HeaderNav">
      <Image src={Logo} alt="logo" />

      <div className="info-side">
        <NotificationIcon />
        <div className="avatar-box">AI</div>
        <p className="user-name">Adelowo I...</p>
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default index;
