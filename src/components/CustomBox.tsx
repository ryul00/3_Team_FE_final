"use client";

interface CustomBoxProps {
	$width?: string;
	$height?: string;
	$gap?: string;
	$display?: string;
	$flexdirection?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$margintop?: string;
	$padding?: string;
	$backgroundcolor?: string;
	$color?: string;
	$border?: string;
	$borderradius?: string;
	$overflowy?: "visible" | "hidden" | "scroll" | "auto";
	$overflowx?: "visible" | "hidden" | "scroll" | "auto";
	$zindex?: string;
	children: React.ReactNode;
	className?: string;
}

const CustomBox: React.FC<CustomBoxProps> = ({
	$width = "100%",
	$height = "5rem",
	$gap = "1rem",
	$display = "flex",
	$flexdirection = "column",
	$alignitems = "center",
	$justifycontent = "center",
	$margin = "0",
	$margintop = "0",
	$padding = "0",
	$backgroundcolor = "#1E1E1E",
	$color = "black",
	$border = "none",
	$borderradius = "0.5rem",
	$overflowy = "auto",
	$overflowx = "auto",
	$zindex = "3",
	className = "",
	children,
}) => {
	return (
		<div
			style={{
				width: $width,
				height: $height,
				gap: $gap,
				margin: $margin,
				marginTop: $margintop,
				padding: $padding,
				backgroundColor: $backgroundcolor,
				color: $color,
				border: $border,
				borderRadius: $borderradius,
				overflowY: $overflowy,
				overflowX: $overflowx,
				zIndex: $zindex ? parseInt($zindex) : undefined,
			}}
			className={`${$display === "flex" ? "flex" : ""
				} flex-${$flexdirection} items-${$alignitems} justify-${$justifycontent} ${className}`}
		>
			{children}
		</div>
	);
};

export default CustomBox;
