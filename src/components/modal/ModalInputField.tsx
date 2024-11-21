"use client";

import React, { useState } from "react";

interface ModalInputFieldProps {
    input?: any;
    setInput?: any;
    placeholder?: string;
}

const ModalInputField: React.FC<ModalInputFieldProps> = ({ placeholder = "", input, setInput }) => {
    const [isError, setIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            setIsError(false);
            setInput(inputValue);
        } else {
            setIsError(true);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={input || ""}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full h-[2rem] px-4 border rounded-lg outline-none transition-all duration-300 ${isError ? "border-red-500" : "border-[#7A6B52]"}`}
            />
            {isError && <p className="absolute bottom-[-15px] right-2 text-[10px] text-red-500">숫자만 입력 가능합니다.</p>}
        </div>
    );
};

export default ModalInputField;
