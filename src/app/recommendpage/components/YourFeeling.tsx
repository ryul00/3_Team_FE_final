import React, { useState, useEffect } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

const emotions = [
	"행복해요",
	"불안해요",
	"슬퍼요",
	"답답해요",
	"보람차요",
	"기대돼요",
	"우울해요",
	"화나요",
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
			className={`transition-colors duration-300 ${isActive ? "text-white" : "text-[#856FCA]"}`}
			onClick={onClick}
		>
			<span className="font-bold text-base">{emotion}</span>
		</CustomButton>
	);
};

export default function YourFeeling({
	setSelectedEmotions,
}: {
	setSelectedEmotions: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleButtonClick = (emotion: string) => {
		setActiveButtons((prevState) =>
			prevState.includes(emotion)
				? prevState.filter((item) => item !== emotion) // 클릭 해제
				: [...prevState, emotion] // 클릭 활성화
		);
	};

	// activeButtons 상태 변경 시 상위 컴포넌트의 상태 업데이트 !!
	useEffect(() => {
		setSelectedEmotions(activeButtons);
	}, [activeButtons, setSelectedEmotions]);

	return (
		<CustomColumn $width="90%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $justifycontent="flex-start">
				<p className="text-white font-bold text-base">지금, 당신의 기분은?</p>
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
