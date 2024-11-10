"use client";

// column 구조가 필요할 때 import해서 사용하세요
// 사용 예시: <CustomColumn $width="100%" $alignitems="start" $justifycontent="between"> ~ </CustomColumn>

interface CustomColumnProps {
	$width?: string;
	$height?: string;
	$gap?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$padding?: string;
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
	children,
}) => {
	return (
		<div
			style={{
				width: $width,
				height: $height,
				gap: $gap,
				margin: $margin,
				padding: $padding,
			}}
			className={`flex flex-col items-${$alignitems} justify-${$justifycontent}`}
		>
			{children}
		</div>
	);
};

export default CustomColumn;
