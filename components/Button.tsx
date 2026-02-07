import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-300 ease-in-out text-sm uppercase tracking-wider";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-yellow-400 hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-black hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
    white: "bg-white text-secondary hover:bg-gray-100 hover:shadow-lg"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;