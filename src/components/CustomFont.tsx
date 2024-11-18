"use client";

interface CustomFontProps {
	$font?: string;
	$color?: string;
	$fontweight?: string;
	$fontfamily?: string;
	children?: React.ReactNode;
	className?: string;
}

const CustomFont: React.FC<React.PropsWithChildren<CustomFontProps>> = ({
	$font = "0.8rem",
	$color = "#F0F0F0",
	$fontweight = "normal",
	$fontfamily = "none",
	children,
	className,
}) => {
	return (
		<a
			style={{
				fontSize: $font,
				color: $color,
				fontWeight: $fontweight,
				fontFamily: $fontfamily !== "none" ? $fontfamily : undefined,
			}}
			className={`text-sm text-gray-100 font-normal ${className || ""}`}
		>
			{children}
		</a>
	);
};

export default CustomFont;
