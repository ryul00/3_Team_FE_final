"use client";

import "../scroll.css";
import React, { useEffect, useState } from "react";
import NeverRead from "./NeverRead";
import DuringRead from "./DuringRead";
import DoneRead from "./DoneRead";
import { getBookShelf } from "../../api/getBookShelf";

export default function BigBookShelf() {
	const [readBooks, setReadBooks] = useState([]);
	const [partiallyReadBooks, setPartiallyReadBooks] = useState([]);
	const [unreadBooks, setUnreadBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await getBookShelf();
				console.log("응답 데이터:", response);

				setReadBooks(response.readBooks);
				setPartiallyReadBooks(response.partiallyReadBooks);
				setUnreadBooks(response.unreadBooks);

				console.log("다 읽은 책 배열 전달 성공", response.readBooks);
				console.log("덜 읽은 책 배열 전달 성공", response.partiallyReadBooks);
				console.log("안 읽은 책 배열 전달 성공", response.unreadBooks);
			} catch (error) {
				console.error("책 데이터를 가져오는 중 오류 발생:", error);
			}
		};

		fetchBooks();
	}, []);

	return (

		<div className="w-full h-auto bg-[#8D6542] rounded-tl-[2rem] rounded-tr-[2rem] flex flex-col gap-4 p-4">
			<DuringRead books={partiallyReadBooks} />
			<NeverRead books={unreadBooks} />
			<DoneRead books={readBooks} />
		</div>
	);
}
