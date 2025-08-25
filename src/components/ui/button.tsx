import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "ghost" | "outline";
}

export function Button({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "default",
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded transition-colors";

  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
