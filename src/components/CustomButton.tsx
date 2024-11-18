"use client";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	$width?: string | number;
	$height?: string | number;
	$gap?: string | number;
	$display?: string;
	$flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	$alignItems?: string;
	$justifyContent?: string;
	$margin?: string;
	$padding?: string;
	$backgroundColor?: string;
	$color?: string;
	$border?: string;
	$borderRadius?: string;
	$hoverBackgroundColor?: string;
	$hoverOpacity?: string | number;
	children: React.ReactNode;
	className?: string; // TailwindCSS 클래스 사용 가능하게 추가함
}

const CustomButton: React.FC<CustomButtonProps> = ({
	$width = "100%",
	$height = "3rem",
	$gap = "1rem",
	$display = "flex",
	$flexDirection = "row",
	$alignItems = "center",
	$justifyContent = "center",
	$margin = "0",
	$padding = "0.75rem 1.5rem",
	$backgroundColor = "primary",
	$color = "black",
	$border = "none",
	$borderRadius = "0.5rem",
	$hoverBackgroundColor,
	$hoverOpacity = 0.7,
	children,
	className,
	...props
}) => {
	return (
		<button
			style={{
				width: typeof $width === "string" ? $width : `${$width}px`,
				height: typeof $height === "string" ? $height : `${$height}px`,
				gap: typeof $gap === "string" ? $gap : `${$gap}px`,
				display: $display,
				flexDirection: $flexDirection,
				alignItems: $alignItems,
				justifyContent: $justifyContent,
				margin: $margin,
				padding: $padding,
				backgroundColor: $backgroundColor,
				color: $color,
				border: $border,
				borderRadius: $borderRadius,
				
			}}
			className={`cursor-pointer transition-opacity duration-100 ease-in-out ${className || ""}`}
			onMouseEnter={(e) => {
				if ($hoverBackgroundColor) {
					(e.currentTarget as HTMLElement).style.backgroundColor = $hoverBackgroundColor;
				}
				if ($hoverOpacity) {
					(e.currentTarget as HTMLElement).style.opacity = `${$hoverOpacity}`;
				}
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLElement).style.backgroundColor = $backgroundColor;
				(e.currentTarget as HTMLElement).style.opacity = "1";
			}}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
