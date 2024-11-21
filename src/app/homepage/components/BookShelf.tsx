"use client";

import React, { useEffect, useState } from "react";
import StyledImg from "@/components/StyledImg";
import "./scroll.css";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { getBookShelf } from "../api/getBookShelf";

interface Book {
	shelfBookId: number;
	title: string;
	coverImageUrl: string | null;
	bookmarks: any[];
}

export default function BookShelf() {
	const router = useRouter();
	const [reReadBooks, setReReadBooks] = useState<Book[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await getBookShelf();
				// console.log("응답 데이터:", response);

				setReReadBooks(response.rereadBooks);
				console.log("또 읽은 책 배열 전달 성공");
			} catch (error) {
				console.error("책 데이터를 가져오는 중 오류 발생:", error);
			}
		};

		fetchBooks();
	}, []);

	return (
		<>
			<CustomRow $width="90%" $justifycontent="flex-end" $alignitems="center">
				<CustomBox $backgroundcolor="#D1A325" $width="auto" $height="auto" $padding="0.2rem 0.5rem">
					<CustomFont $color="white">또 읽을 책</CustomFont>
				</CustomBox>
			</CustomRow>
			<div className="relative w-full h-[10vh] flex items-center justify-center">
				<div className="relative w-full h-[10vh] flex flex-col items-center justify-start">

					{reReadBooks.length === 0 ? (
						<CustomRow $width="100%" $alignitems="flex-end" $justifycontent="center">
							<CustomFont $color="white">아직 또 읽은 책이 없네요!</CustomFont>
						</CustomRow>
					) : (
						<div className="z-10 w-full max-w-[75%] h-[15vh] overflow-x-auto flex gap-2.5 custom-scrollbar">

							{reReadBooks.map((reReadBook, index) => (
								<CustomButton
									key={`to-read-book-${index}`}
									$backgroundColor="transparent"
									$width="auto"
									$height="auto"
									$padding="0"
									onClick={() => router.push("/readingdeskpage")}
								>
									<div className="bg-[#D9D9D9] w-[100px] h-[100%] flex-shrink-0 rounded-md">
										<img
											src={reReadBook.coverImageUrl || "/placeholder-image.jpg"}
											alt={reReadBook.title}
											className="w-full h-full object-cover rounded-md"
										/>
									</div>
								</CustomButton>
							))}
						</div>
					)}
					<StyledImg
						src={"/icon_bookShelf.svg"}
						$width="95%"
						className="absolute bottom-0 transform translate-y-[30%] z-0"
					/>
				</div>
			</div>
		</>
	);
}
