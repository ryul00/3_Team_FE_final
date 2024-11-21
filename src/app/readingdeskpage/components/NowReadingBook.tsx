"use client";

import { useState } from "react";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import ButtonStar from "./ButtonStar";
import Modal from "@/components/modal/Modal";

import { addFavoriteAPI } from "../api/addFavoriteAPI";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";

export default function NowReadingBook({ bookDetails }: { bookDetails: { bookId: number; title: string; lastTime: string } | null }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState<string | null>(null);
	const [isFavorite, setIsFavorite] = useState(false); // 별의 활성화
	const title = bookDetails?.title || "책 정보 없음";

	const handleOpenModal = (message: string) => {
		setModalMessage(message);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalMessage(null);
	};

	const handleAddToFavorite = async () => {
		if (!bookDetails?.bookId) {
			handleOpenModal("책 정보가 없습니다.");
			return;
		}

		try {
			const response = await addFavoriteAPI(bookDetails.bookId);

			if (response.status === 200) {
				const message = response.shelfBook?.status === "또읽을책"
					? "또 읽을 책으로 추가하였습니다!"
					: "책을 다 읽으신 후 또 읽을 책으로 등록이 가능합니다!" || "상태가 변경되었습니다.";

				handleOpenModal(message);
				setIsFavorite(true); // 요청 성공 시 별 버튼 노랗게 됨
			}
		} catch (error: any) {
			console.log("에러 객체:", error);

			const message =
				typeof error === "object" && error.message
					? "책을 다 읽으신 후 또 읽을 책으로 등록이 가능합니다!"
					: "알 수 없는 오류가 발생했습니다.";

			handleOpenModal(message);
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
						{title || "책 정보 없음"}
					</CustomFont>
				</CustomRow>

				<ButtonStar
					isActive={isFavorite}
					onClick={handleAddToFavorite}
				/>
			</CustomRow>

			{isModalOpen && modalMessage && (
				<Modal onClose={handleCloseModal}>
					<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
						<CustomFont $color="black" $font="0.8rem">{modalMessage}</CustomFont>
						<CustomButton
							$width="auto"
							$height='auto'
							$padding="0.5rem"
							onClick={handleCloseModal}
							$backgroundColor="#473322"
						>
							<CustomFont $color="white">확인</CustomFont>
						</CustomButton>
					</CustomColumn>
				</Modal>
			)}
		</>
	);
}
