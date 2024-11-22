"use client";

import React, { useState, useEffect } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import Modal from "@/components/modal/Modal";

import { getReviewFromAPI } from "../api/getReviewFromAPI";
import { addBookByAPI } from "../api/addBookByAPI";

import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";

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

interface Book {
	title: string;
	image: string;
}

export default function ReadReviewAndAdd({ books }: { books: Book[] }) {

	const [activeButtons, setActiveButtons] = useState<number[]>([]);
	const [reviews, setReviews] = useState<string[][]>([]); // 리뷰 데이터
	const [modal, setModal] = useState(false);
	const [modalMessage, setModalMessage] = useState("");

	const handleButtonClick = async (index: number, title: string) => {
		try {
			const response = await addBookByAPI(title);
			console.log("책 추가 성공:", response);
			setModal(true);
			setModalMessage("이 책을 책장에 꽂았어요!");

			// 버튼 활성화 상태 변경
			setActiveButtons((prevState) =>
				prevState.includes(index)
					? prevState.filter((i) => i !== index)
					: [...prevState, index]
			);
		} catch (error: any) {
			console.error("책 추가 중 오류:", error);

			if (error) {
				setModal(true);
				setModalMessage("이미 책장에 꽂아둔 책입니다!");
			}
		}
	};


	const handleModalOpen = () => {
		setModal(true);
	}

	const handleModalClose = () => {
		setModal(false);
	}

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await getReviewFromAPI(books);

				const extractedReviews = response.reviews.map((bookReview: any) =>
					bookReview.reviews.length > 0
						? bookReview.reviews
						: ["감상이 없습니다."] // 리뷰가 없을 경우 기본 메시지
				);

				setReviews(extractedReviews);
			} catch (error) {
				console.error("리뷰 데이터를 가져오는 중 오류 발생:", error);
			}
		};

		fetchReviews();
	}, [books]);

	return (
		<CustomColumn $width="100%" $gap="1rem">

			<p className="text-[#544681] font-bold text-sm ">
				다른 사람들의 한 줄 감상을 참고하여 책장에 담아보세요.
			</p>

			<CustomRow $width="100%" $gap="1rem">
				{reviews.map((reviewList, columnIndex) => (
					<CustomColumn
						key={columnIndex}
						$width="25%"
						$height="18rem"
						$alignitems="center"
						$justifycontent="space-between"
					>
						<CustomColumn $width='100%'>
							{reviewList.map((review, reviewIndex) => (
								<CustomBox
									key={reviewIndex}
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
										{review}
										<RiSingleQuotesR className="inline-block ml-1" />
									</CustomFont>
								</CustomBox>
							))}
						</CustomColumn>

						<CustomStyledButton
							isActive={activeButtons.includes(columnIndex)}
							onClick={() => handleButtonClick(columnIndex, books[columnIndex].title)}
						/>
					</CustomColumn>
				))}
			</CustomRow>

			{modal && (
				<Modal onClose={handleModalClose}>
					<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
						<CustomFont $color='black' $font='0.8rem'>
							{modalMessage}
						</CustomFont>

						<CustomButton $width='auto' $height='auto' $padding='0.5rem' $alignItems="center" $justifyContent="center"
							$backgroundColor="#473322" onClick={handleModalClose}>
							<CustomFont $color='white' $font='0.8rem' >확인</CustomFont>
						</CustomButton>
					</CustomColumn>
				</Modal>
			)}
		</CustomColumn>
	);
}
