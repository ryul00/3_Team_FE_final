"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";

import ManageBookMarkModal from "./bookmarkmodal/ManageBookMarkModal";

const bookmarks = [
	{ page: "12쪽", text: "박제가 되어버린 천재를 아시오?" },
	{ page: "47쪽", text: "굿바이. 그대는 이따금 그대가 제일 싫어하는 음식을 탐식하는 아이로니를 실천해 보는 것도 놓을 것 같소." },
	{ page: "12쪽", text: "우리들은 서로 오해하고 있느니라. 설마 아내가 아스피린 대신에 아달린의 정량을 나에게 먹여 왔을까?" },
	{ page: "12쪽", text: "날자, 날자, 날자, 한번만 더 날아보자꾸나." },
];

// 20글자 넘는 문장은 말줄임
const truncateText = (text: string, limit: number = 20): string => {
	return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

export default function BookMarks() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<CustomColumn $width="90%" $gap="0.5rem">
			<CustomRow $width="100%" $alignitems="center" $justifycontent="space-between">
				<CustomFont $color="#7A6B52" $font="1rem" $fontweight="bold">나의 책갈피</CustomFont>
				<CustomButton
					$width='auto'
					$height="auto"
					$backgroundColor="transparent"
					$border="1px solid #7A6B52"
					$borderRadius="1rem"
					$alignItems="center"
					$justifyContent="center"
					$padding="0.2rem 0.5rem"
					onClick={handleOpenModal}
				>
					<CustomFont $color="#7A6B52" $font="0.8rem" $fontweight="bold">책갈피 관리</CustomFont>
				</CustomButton>
			</CustomRow>

			<CustomBox
				$width="100%"
				$height='10rem'
				$alignitems="center"
				$justifycontent="center"
				$gap="1rem"
				$backgroundcolor="transparent"
				$border="1px solid #7A6B52"
				$borderradius="1rem"
				$padding="1rem"
			>
				<CustomColumn $width='100%' $gap='0.5rem' $alignitems="center" $justifycontent="center">
					{bookmarks.map((bookmark, index) => (
						<CustomRow key={index} $width="100%" $justifycontent="flex-start" $alignitems="center">
							<CustomFont $color="#7A6B52" $font="1rem" $fontweight="bold">{bookmark.page}</CustomFont>
							<CustomFont $color="#7A6B52" $font="1rem">{truncateText(bookmark.text)}</CustomFont>
						</CustomRow>
					))}
				</CustomColumn>
			</CustomBox>
			{isModalOpen && <ManageBookMarkModal onClose={handleCloseModal} />}
		</CustomColumn>
	);
}
