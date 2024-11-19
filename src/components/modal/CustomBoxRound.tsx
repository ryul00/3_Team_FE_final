import React from "react";
import CustomBox from "../CustomBox";

interface CustomBoxRoundProps {
	$width?: string;
	$height?: string;
	$backgroundcolor?: string;
	$padding?: string;
	$alignitems?: string;
	$justifycontent?: string;
	className?: string;
	children?: React.ReactNode;
	minHeight?: string;
}

const CustomBoxRound: React.FC<CustomBoxRoundProps> = ({
	$width = "auto",
	$height = "auto",
	$backgroundcolor = "transparent",
	$padding = "0",
	$alignitems = "flex-start",
	$justifycontent = "flex-start",
	className = "",
	minHeight = "10rem",
	children,
}) => {
	return (
		<CustomBox
			$width={$width}
			$height={$height}
			$backgroundcolor={$backgroundcolor}
			$padding={$padding}
			$alignitems={$alignitems}
			$justifycontent={$justifycontent}
			className={className}
			$borderradius="0 0 2rem 0" // 우측 하단 모서리만 둥글어짐!
		>
			{children}
		</CustomBox>
	);
};

export default CustomBoxRound;
