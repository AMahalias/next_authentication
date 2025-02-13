"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   children,
   onClick,
   variant = "primary",
   size = "medium",
   disabled = false,
}) => {
    const baseStyles = "font-bold text-white rounded focus:outline-none focus:ring-2 transition duration-300";

    const variants = {
        primary: "bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300",
        secondary: "bg-gray-500 hover:bg-gray-700 disabled:bg-gray-300",
        danger: "bg-red-500 hover:bg-red-700 disabled:bg-red-300",
    };

    const sizes = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg",
    };

    const variantStyle = variants[variant];
    const sizeStyle = sizes[size];

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyle} ${sizeStyle}`}
        >
            {children}
        </button>
    );
};

export default Button;
