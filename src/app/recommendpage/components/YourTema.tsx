"use client";

import React, { useState, useEffect } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

const tema = [
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
	tema,
	isActive,
	onClick,
}: {
	tema: string;
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
			className={`transition-colors duration-300 ${isActive ? "text-white" : "text-[#856FCA]"}`}
			onClick={onClick}
		>
			<span className="font-bold text-base">{tema}</span>
		</CustomButton>
	);
};

export default function YourTema({
	setSelectedThemes,
}: {
	setSelectedThemes: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleButtonClick = (tema: string) => {
		setActiveButtons((prevState) =>
			prevState.includes(tema)
				? prevState.filter((item) => item !== tema) // 클릭 해제
				: [...prevState, tema] // 클릭 활성화
		);
	};

	// activeButtons 상태가 변경될 때 상위 컴포넌트 상태 업데이트 !!
	useEffect(() => {
		setSelectedThemes(activeButtons);
	}, [activeButtons, setSelectedThemes]);

	return (
		<CustomColumn $width="90%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $justifycontent="flex-start">
				<p className="text-white font-bold text-base">당신이 좋아하는 테마는?</p>
			</CustomRow>

			<CustomColumn $width="100%">
				{Array.from({ length: 2 }, (_, i) => (
					<CustomRow key={i} $width="100%" $gap="0.5rem">
						{tema.slice(i * 4, (i + 1) * 4).map((tema) => (
							<CustomStyledButton
								key={tema}
								tema={tema}
								isActive={activeButtons.includes(tema)}
								onClick={() => handleButtonClick(tema)}
							/>
						))}
					</CustomRow>
				))}
			</CustomColumn>
		</CustomColumn>
	);
}
