"use client";

import React, { useState } from "react";

interface NormalInputFieldProps {
	placeholder?: string;
	defaultValue?: string;
}

const NormalInputField: React.FC<NormalInputFieldProps> = ({
	placeholder = "",
	defaultValue = "",
}) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className="relative">
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="w-full h-[2rem] px-4 border rounded-lg outline-none transition-all duration-300"
			/>
		</div>
	);
};

export default NormalInputField;
