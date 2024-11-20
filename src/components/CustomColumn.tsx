"use client";

interface CustomColumnProps {
	$width?: string;
	$height?: string;
	$gap?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$padding?: string;
	className?: string;
	children?: React.ReactNode;
}

const CustomColumn: React.FC<CustomColumnProps> = ({
	$width = "auto",
	$height = "auto",
	$gap = "0.5rem",
	$alignitems = "center",
	$justifycontent = "center",
	$margin = "0",
	$padding = "0",
	className = "",
	children,
}) => {
	// TailwindCSS 지원 클래스 설정
	const justifyClass = {
		"flex-start": "justify-start",
		"flex-end": "justify-end",
		"center": "justify-center",
		"space-between": "justify-between",
		"space-around": "justify-around",
		"space-evenly": "justify-evenly",
	}[$justifycontent] || "justify-center";

	const alignClass = {
		"start": "items-start",
		"end": "items-end",
		"center": "items-center",
		"stretch": "items-stretch",
		"baseline": "items-baseline",
	}[$alignitems] || "items-center";

	return (
		<div
			style={{
				width: $width,
				height: $height,
				gap: $gap,
				margin: $margin,
				padding: $padding,
			}}
			className={`flex flex-col ${alignClass} ${justifyClass} ${className}`}
		>
			{children}
		</div>
	);
};

export default CustomColumn;
