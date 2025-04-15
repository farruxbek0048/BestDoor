import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyles = "rounded-md transition duration-300";

  const variantStyles = {
    primary: "font-semibold px-[20px] py-2 bg-white text-gray-800 rounded-[10px] shadow-sm hover:bg-transparent transition hover:text-[#fff] hover:outline outline-1 outline-white",
    secondary: "whitespace-nowrap hover:bg-transparent font-light bg-[#000] px-[32px] py-2 text-white hover:bg-[#fff] hover:outline outline-1 outline-black hover:text-black",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
