import React, { FC } from "react";

type ButtonPropTypes = {
  label: string;
  onClick: VoidFunction;
};

const Button: FC<ButtonPropTypes> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
