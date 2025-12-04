import React from 'react';

interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'nav' | 'cta';
  active?: boolean;
  className?: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'nav',
  active = false,
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors duration-200';
  
  const variantStyles = {
    nav: active 
      ? 'bg-blue-600 text-white' 
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white',
    cta: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default LayoutButton;
