"use client";

import React, { useState } from "react";

interface ModalTextAreaProps {
	placeholder?: string;
	maxLength: number;
}

const ModalTextArea: React.FC<ModalTextAreaProps> = ({
	placeholder = "",
	maxLength,
}) => {
	const [value, setValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= maxLength) {
			setValue(e.target.value);
		}
	};

	return (
		<div className="relative w-full">
			<textarea
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="w-full h-[10rem] px-4 py-2 border rounded-lg outline-none border-[#7A6B52] resize-none"
			/>
			<p className="absolute bottom-[-20px] right-2 text-sm text-[#7A6B52]">
				{value.length}/{maxLength}
			</p>
		</div>
	);
};

export default ModalTextArea;
