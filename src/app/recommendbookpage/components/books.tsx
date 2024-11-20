"use client";

import React, { useEffect } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import { sendBooksToAPI } from "../api/sendBooksToAPI";

interface Book {
	title: string;
	image: string;
}

export default function Books({ books }: { books: Book[] }) {
	useEffect(() => {
		sendBooksToAPI(books);
	}, [books]);

	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="2rem">
			<p className="text-[#544681] font-bold text-base">
				당신에게 어울리는 책을 찾았어요!
			</p>


			<CustomRow $width="100%" $gap="1rem">
				{books.map((book, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-2"
						style={{
							width: "25%",
							backgroundColor: "transparent",
							boxSizing: "border-box",
						}}
					>
						<img
							src={book.image}
							alt={book.title}
							className="w-full h-auto object-cover"
							style={{ borderRadius: "0.5rem" }}
						/>
						<p className="text-center font-normal text-sm text-white">{book.title}</p>
					</div>
				))}
			</CustomRow>
		</CustomColumn>
	);
}
