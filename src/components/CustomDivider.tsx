"use client";

// 구분선이 필요할 경우 이 컴포넌트 사용

interface CustomDividerProps {
	$width?: string;
	$height?: string;
	$backgroundcolor?: string;
	$borderradius?: string;
}

const CustomDivider: React.FC<CustomDividerProps> = ({
	$width = "100%",
	$height = "1px",
	$backgroundcolor = "#1E1E1E",
	$borderradius = "0.5rem",
}) => {
	return (
		<div
			style={{
				width: $width,
				height: $height,
				backgroundColor: $backgroundcolor,
				borderRadius: $borderradius,
			}}
			className="w-full h-px bg-gray-800 rounded"
		/>
	);
};

export default CustomDivider;
