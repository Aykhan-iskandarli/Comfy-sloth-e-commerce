import React from "react";

const Button = ({ children, className, type, onClick, disabled, style }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
     <span> {children}</span>
    </button>
  );
};

export default Button;
