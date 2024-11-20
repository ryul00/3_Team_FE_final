"use client";

import React, { useState, useEffect } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

const genre = ["소설", "에세이", "시", "교양서적"];

const CustomStyledButton = ({
	genre,
	isActive,
	onClick,
}: {
	genre: string;
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
			<span className="font-bold text-base">{genre}</span>
		</CustomButton>
	);
};

export default function YourGenre({
	setSelectedGenres,
}: {
	setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleButtonClick = (genre: string) => {
		setActiveButtons((prevState) =>
			prevState.includes(genre)
				? prevState.filter((item) => item !== genre) // 클릭 해제
				: [...prevState, genre] // 클릭 활성화
		);
	};

	// activeButtons 상태가 변경될 때 상위 컴포넌트 상태 업데이트 !!
	useEffect(() => {
		setSelectedGenres(activeButtons);
	}, [activeButtons, setSelectedGenres]);

	const itemsPerRow = 4;
	const numberOfRows = Math.ceil(genre.length / itemsPerRow); // 필요한 행의 개수 계산

	return (
		<CustomColumn $width="90%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $justifycontent="flex-start">
				<p className="text-white font-bold text-base">당신이 좋아하는 장르는?</p>
			</CustomRow>

			<CustomColumn $width="100%">
				{Array.from({ length: numberOfRows }, (_, rowIndex) => (
					<CustomRow key={rowIndex} $width="100%" $gap="0.5rem">
						{genre
							.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow) // 해당 행의 버튼만 슬라이스
							.map((genre) => (
								<CustomStyledButton
									key={genre}
									genre={genre}
									isActive={activeButtons.includes(genre)}
									onClick={() => handleButtonClick(genre)}
								/>
							))}
					</CustomRow>
				))}
			</CustomColumn>
		</CustomColumn>
	);
}
