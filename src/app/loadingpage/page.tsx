"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import CustomColumn from "@/components/CustomColumn";
import StyledImg from "@/components/StyledImg";

export default function LoadingPage() {
	const searchParams = useSearchParams();
	const message = searchParams.get("message");
	const router = useRouter();

	useEffect(() => {
		const fetchISBN = async () => {
			try {
				const response = await fetch(
					`/loadingpage/api/isbnApi?message=${encodeURIComponent(message || "Science")}`
				);
				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}
				const data = await response.json();
				console.log("ISBN API 호출 성공, 응답 데이터:", data);

				const books = data.books || [];
				const selectedBooks = books
					.sort(() => Math.random() - 0.5)
					.slice(0, 3)
					.map((book: any) => ({
						title: book.title,
						image: book.image,
					}));

				console.log("선택된 책 데이터:", selectedBooks);

				setTimeout(() => {
					router.push(
						`/recommendbookpage?books=${encodeURIComponent(JSON.stringify(selectedBooks))}`
					);
				}, 2000);
			} catch (error) {
				console.error("ISBN API 호출 중 오류 발생:", error);
			}
		};

		if (message) {
			console.log("message 전달됨, 전달된 message:", message);
			fetchISBN();
		}
	}, [message, router]);

	return (
		<CustomColumn
			$width="100%"
			$height="100vh"
			$alignitems="center"
			$justifycontent="center"
			$gap="4rem"
		>
			<StyledImg src={"/icon_logo.svg"} />
			<CustomColumn $gap="1rem">
				<p className="text-[#856FCA] font-bold text-base">
					별책부록 사서가 열심히 책을 찾고 있어요.
				</p>
				<p className="text-[#856FCA] font-bold text-base">잠시만 기다려주세요...</p>
			</CustomColumn>
		</CustomColumn>
	);
}
