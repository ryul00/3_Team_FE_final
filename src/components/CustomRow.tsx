"use client";

// row 구조가 필요할 때 import해서 사용하세요
// 사용 예시: <CustomRow $width="100%" $alignitems="start" $justifycontent="between"> ~ </CustomRow>

interface CustomRowProps {
	$width?: string;
	$maxwidth?: string;
	$height?: string;
	$gap?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$padding?: string;
	children?: React.ReactNode;
}

const CustomRow: React.FC<CustomRowProps> = ({
	$width = "auto",
	$maxwidth = "none",
	$height = "auto",
	$gap = "10px",
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
				maxWidth: $maxwidth,
				height: $height,
				gap: $gap,
				margin: $margin,
				padding: $padding,
			}}
			className={`flex flex-row items-${$alignitems} justify-${$justifycontent}`}
		>
			{children}
		</div>
	);
};

export default CustomRow;
