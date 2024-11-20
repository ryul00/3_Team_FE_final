"use client";

import CustomButton from "@/components/CustomButton";
import CustomFont from "@/components/CustomFont";
import StyledImg from "@/components/StyledImg";

interface ArrowButtonProps {
	imagePath: string;
	width: string;
	height: string;
	text: string;
	textSize?: "text-sm" | "text-md" | "text-lg" | "text-xl";
	textWeight?: "font-normal" | "font-medium" | "font-bold";
	onClick?: () => void;
}

export default function ArrowButton({
	imagePath,
	width,
	height,
	text,
	textSize = "text-sm",
	textWeight = "font-bold",
	onClick,
}: ArrowButtonProps) {
	return (
		<CustomButton
			$width="auto"
			$height="auto"
			$padding="0"
			className="relative z-0 w-auto h-8 bg-transparent flex items-center justify-center"
			onClick={onClick}
		>
			<div className={`relative ${width} ${height} overflow-hidden z-1`}>
				<StyledImg
					src={imagePath}
					$width="100%"
					$height="100%"
					className="absolute top-0 left-0 w-full h-full z-1"
				/>
				<CustomFont
					className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white whitespace-nowrap z-10 ${textSize} ${textWeight}`}
				>
					{text}
				</CustomFont>
			</div>
		</CustomButton>
	);
}
