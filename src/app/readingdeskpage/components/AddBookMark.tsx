"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";

import ArrowButton from "@/app/homepage/components/ArrowButton";
import StyledImg from "@/components/StyledImg";

import BookMarkModal from "./bookmarkmodal/BookMarkModal";
import "./coffee.css";

export default function AddBookMark() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<CustomColumn $width="90%" $gap="0.5rem">
				<CustomRow $width="100%" $alignitems="center" $justifycontent="flex-end" $height="auto">
					<ArrowButton
						imagePath="/back_button_bookmark_3.svg"
						width="w-[8rem]"
						height="h-[2rem]"
						text="책갈피 추가"
						onClick={handleOpenModal}
					/>
				</CustomRow>

				<CustomRow $width="100%" $alignitems="flex-end" $justifycontent="flex-start" $height="auto">
					<StyledImg src="/icon_readingdesk_book.svg" />
					<div className="smoke-container" style={{ width: "7rem", height: "7rem" }}>
						<div className="smoke smoke-1"></div>
						<div className="smoke smoke-2"></div>
						<div className="smoke smoke-3"></div>
						<StyledImg src="/icon_coffee.png" $width="7rem" />
					</div>
				</CustomRow>
			</CustomColumn>

			{isModalOpen && <BookMarkModal onClose={handleCloseModal} />}
		</>
	);
}
