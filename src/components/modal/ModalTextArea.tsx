"use client";

import React from "react";

interface ModalTextAreaProps {
    placeholder?: string;
    maxLength: number;
    textArea?: string;
    setTextArea: any;
}

const ModalTextArea: React.FC<ModalTextAreaProps> = ({ placeholder = "", maxLength, textArea, setTextArea }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= maxLength) {
            setTextArea(e.target.value);
        }
    };

    return (
        <div className="relative w-full">
            <textarea value={textArea || ""} onChange={handleChange} placeholder={placeholder} className="w-full h-[10rem] px-4 py-2 border rounded-lg outline-none border-[#7A6B52] resize-none" />
            <p className="absolute bottom-[-20px] right-2 text-sm text-[#7A6B52]">
                {textArea?.length}/{maxLength}
            </p>
        </div>
    );
};

export default ModalTextArea;
