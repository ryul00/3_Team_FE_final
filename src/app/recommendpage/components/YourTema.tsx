"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

const emotions = [
	"로맨스",
	"스릴러",
	"추리",
	"공포",
	"역사",
	"고전",
	"슬픔",
	"가족",
];

const CustomStyledButton = ({
	emotion,
	isActive,
	onClick,
}: {
	emotion: string;
	isActive: boolean;
	onClick: () => void;
}) => {
	return (
		<CustomButton
			$height="auto"
			$backgroundColor={isActive ? "#856FCA" : "transparent"}
			$color={isActive ? "white" : "#856FCA"}
			$border="1px solid #544681"
			$alignItems="center"
			$justifyContent="center"
			$padding="0.5rem"
			className={`transition-colors duration-300 ${isActive ? "text-white" : "text-[#856FCA]"
				}`}
			onClick={onClick}
		>
			<span className="font-bold text-base">{emotion}</span>
		</CustomButton>
	);
};

export default function YourTema() {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleButtonClick = (emotion: string) => {
		setActiveButtons((prevState) =>
			prevState.includes(emotion)
				? prevState.filter((item) => item !== emotion) // 클릭 해제
				: [...prevState, emotion] // 클릭 활성화
		);
	};

	return (
		<CustomColumn $width="90%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $justifycontent="flex-start">
				<p className="text-white font-bold text-base">당신이 좋아하는 테마는?</p>
			</CustomRow>

			<CustomColumn $width="100%">
				{Array.from({ length: 2 }, (_, i) => (
					<CustomRow key={i} $width="100%" $gap="0.5rem">
						{emotions.slice(i * 4, (i + 1) * 4).map((emotion) => (
							<CustomStyledButton
								key={emotion}
								emotion={emotion}
								isActive={activeButtons.includes(emotion)}
								onClick={() => handleButtonClick(emotion)}
							/>
						))}
					</CustomRow>
				))}
			</CustomColumn>
		</CustomColumn>
	);
}
