"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

const emotions = ["소설", "에세이", "시", "교양서적"];

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

export default function YourGenre() {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleButtonClick = (emotion: string) => {
		setActiveButtons((prevState) =>
			prevState.includes(emotion)
				? prevState.filter((item) => item !== emotion) // 클릭 해제
				: [...prevState, emotion] // 클릭 활성화
		);
	};

	const itemsPerRow = 4; // 한 행(row)에 배치할 버튼 개수
	const numberOfRows = Math.ceil(emotions.length / itemsPerRow); // 필요한 행의 개수 계산

	return (
		<CustomColumn $width="90%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $justifycontent="flex-start">
				<p className="text-white font-bold text-base">당신이 좋아하는 장르는?</p>
			</CustomRow>

			<CustomColumn $width="100%">
				{Array.from({ length: numberOfRows }, (_, rowIndex) => (
					<CustomRow key={rowIndex} $width="100%" $gap="0.5rem">
						{emotions
							.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow) // 해당 행의 버튼만 슬라이스
							.map((emotion) => (
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
