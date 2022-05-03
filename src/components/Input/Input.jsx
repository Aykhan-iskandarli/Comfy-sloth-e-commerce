import React from "react";

const Input = ({
  label,
  children,
  error,
  type,
  className,
  value,
  name,
  onChange,
  placeholder,
  htmlFor
}) => {
  return (
    <div className="div-input">
        {
            label &&  <label htmlFor={htmlFor}>{label}</label>
        }
      <input
        type={type}
        className={`form-control ${className}`}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {children}

      {
          error && <div>{error} </div>
      }
    </div>
  );
};

export default Input;
