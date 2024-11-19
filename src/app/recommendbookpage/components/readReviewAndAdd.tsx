"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";

import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";

const comments = [
	[
		"인생의 허무함을 알려주는 책",
		"삶이란 점점 죽어가는 것",
		"살아있음에 감사함을 느꼈어요.",
	],
	[
		"최고의 복수란 까먹고 잘 사는 것",
		"소중한 나를 버려두지 마",
	],
	[
		"미래를 위해 현재를 불행하지 말자",
		"불시착했다면 새로운 기회가 온 것",
	],
];

const CustomStyledButton = ({
	isActive,
	onClick,
}: {
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
			<span className="font-bold text-base">책장에 담기</span>
		</CustomButton>
	);
};

export default function ReadReviewAndAdd() {
	// 여러 개의 활성 버튼을 저장
	const [activeButtons, setActiveButtons] = useState<number[]>([]);

	const handleButtonClick = (index: number) => {
		setActiveButtons((prevState) =>
			prevState.includes(index)
				? prevState.filter((i) => i !== index)
				: [...prevState, index] // 새로운 버튼 추가
		);
	};

	return (
		<CustomColumn $width="100%" $gap="1rem">

			<p className="text-[#544681] font-bold text-sm ">
				다른 사람들의 한 줄 감상을 참고하여 책장에 담아보세요.
			</p>

			<CustomRow $width="100%" $gap="1rem">
				{comments.map((commentList, columnIndex) => (
					<CustomColumn
						key={columnIndex}
						$width="25%"
						$height="18rem"
						$alignitems="center"
						$justifycontent="space-between"
					>

						<CustomColumn $width='100%'>
							{commentList.map((comment, commentIndex) => (
								<CustomBox
									key={commentIndex}
									$width="100%"
									$height="auto"
									$backgroundcolor="#544681"
									$borderradius="0.5rem"
									$alignitems="center"
									$justifycontent="center"
									$padding='0.5rem'
									$overflowy="hidden"
								>

									<CustomFont $color="white">
										<RiSingleQuotesL className="inline-block mr-1" />
										{comment}
										<RiSingleQuotesR className="inline-block ml-1" />
									</CustomFont>

								</CustomBox>
							))}
						</CustomColumn>


						<CustomStyledButton
							isActive={activeButtons.includes(columnIndex)}
							onClick={() => handleButtonClick(columnIndex)}
						/>
					</CustomColumn>
				))}
			</CustomRow>
		</CustomColumn>
	);
}
