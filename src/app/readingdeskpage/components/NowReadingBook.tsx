"use client";

import { useState } from "react";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import ButtonStar from "./ButtonStar";
import Modal from "@/components/modal/Modal";

import { addFavoriteAPI } from "../api/addFavoriteAPI";
import CustomButton from "@/components/CustomButton";

export default function NowReadingBook({ book }: { book: any }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState<string | null>(null);

	const handleOpenModal = (message: string) => {
		setModalMessage(message);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalMessage(null);
	};

	const handleAddToFavorite = async () => {
		if (!book) return;

		try {
			const response = await addFavoriteAPI(book.shelfBookId);
			if (response.status === 200) {
				handleOpenModal("또 읽을 책으로 추가하였습니다!");
			}
		} catch (error: unknown) {
			if (
				typeof error === "object" &&
				error !== null &&
				"response" in error &&
				error.response &&
				typeof error.response === "object" &&
				"status" in error.response
			) {
				const responseError = error as { response: { status: number } };
				if (responseError.response.status === 400) {
					handleOpenModal("책을 다 읽으신 후 또 읽을 책으로 추가하실 수 있습니다!");
				}
			} else {
				console.error("예기치 못한 에러:", error);
			}
		}
	};

	return (
		<>
			<CustomRow $width="90%" $height="auto" $alignitems="center" $justifycontent="space-between">
				<CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start" $gap="0.5rem">
					<CustomFont $color="white" $fontweight="bold" $font="1rem">
						지금 보고 있는 책
					</CustomFont>
					<CustomFont $color="white" $fontweight="bold" $font="1rem">
						-
					</CustomFont>
					<CustomFont $color="white" $fontweight="bold" $font="1rem">
						{book?.title || "책 정보 없음"}
					</CustomFont>
				</CustomRow>

				<ButtonStar onClick={handleAddToFavorite} />
			</CustomRow>

			{isModalOpen && modalMessage && (
				<Modal onClose={handleCloseModal}>
					<CustomFont $color="black">{modalMessage}</CustomFont>
					<CustomButton
						$width="auto"
						$padding="0.5rem"
						onClick={handleCloseModal}
						$backgroundColor="#473322"
					>
						<CustomFont $color="white">확인</CustomFont>
					</CustomButton>
				</Modal>
			)}
		</>
	);
}
