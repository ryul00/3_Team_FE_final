"use client";

import React, { useState } from "react";

interface ButtonStarProps {
	width?: string;
	height?: string;
	borderColor?: string;
	backgroundColor?: string;
	activeBackgroundColor?: string;
	isActive: boolean; // 활성화 상태를 props로 전달받음
	onClick?: () => void;
}

const ButtonStar: React.FC<ButtonStarProps> = ({
	width = "30px",
	height = "30px",
	borderColor = "#EEE600",
	backgroundColor = "transparent",
	activeBackgroundColor = "#EEE600",
	isActive,
	onClick,
}) => {

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 100 100"
			style={{ cursor: "pointer" }}
			onClick={onClick}
		>
			<polygon
				points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
				fill={isActive ? activeBackgroundColor : backgroundColor}
				stroke={borderColor}
				strokeWidth="2"
			/>
		</svg>
	);
};

export default ButtonStar;
