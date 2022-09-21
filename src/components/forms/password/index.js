import React, { useState } from "react";
import PasswordInput from "./Password";

const Password = ({ placeholder, className, name, ...props }) => {
  const [status, setStatus] = useState(false);
  const onShowPasswordClick = () => {
    setStatus(!status);
  };
  return (
    <PasswordInput
      {...props}
      name={name}
      type={status ? "text" : "password"}
      placeholder={placeholder}
      className={className}
      onShowPasswordClick={onShowPasswordClick}
    />
  );
};

export default Password;
