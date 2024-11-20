"use client";

import React, { useEffect, useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import StyledImg from "@/components/StyledImg";

import DeskHeader from "./components/DeskHeader";
import NowReadingBook from "./components/NowReadingBook";
import Timer from "./components/Timer";
import Radio from "./components/Radio";
import BookMarks from "./components/BookMarks";
import AddBookMark from "./components/AddBookMark";

export default function ReadingDeskPage() {

	const [selectedBook, setSelectedBook] = useState<any>(null);

	useEffect(() => {
		// 로컬 스토리지에서 books 데이터와 선택된 bookId 가져오기
		const books = JSON.parse(localStorage.getItem("books") || "[]");
		const selectedBookId = localStorage.getItem("selectedBookId");

		if (books.length > 0 && selectedBookId) {
			// 선택된 책의 ID로 해당 책 필터링
			const book = books.find((b: any) => b.shelfBookId === parseInt(selectedBookId, 10));
			setSelectedBook(book);
			console.log("선택된 책 정보:", book);
		} else {
			console.log("로컬 스토리지에 데이터가 없습니다.");
		}
	}, []);

	return (
		<CustomColumn
			$width="100%"
			$alignitems="center"
			$justifycontent="flex-start"
			$padding="0"
			$gap="2rem"
		>
			<CustomColumn $width='100%' $gap='0.5rem'>
				<DeskHeader />
				<NowReadingBook book={selectedBook} />
				<Timer book={selectedBook} />
			</CustomColumn>
			<BookMarks book={selectedBook} />
			<Radio />
			<AddBookMark book={selectedBook} />
			<StyledImg src={'/bottom_banner_readingdesk.svg'} />
		</CustomColumn>
	);
}
