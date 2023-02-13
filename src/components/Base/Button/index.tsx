import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  variant?: "primary" | "secondary";
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  switch (props.variant) {
    case "primary":
      return (
        <button className="bg-red-600 rounded-2xl px-4 py-2 font-semibold text-white ">
          {props.children}
        </button>
      );

    case "secondary":
      return (
        <button className="bg-transparent rounded-2xl px-4 py-2 font-semibold text-white border-2 border-white">
          {props.children}
        </button>
      );
    default:
      return <button></button>;
  }
};

export default Button;
