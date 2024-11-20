"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CustomColumn from "@/components/CustomColumn";
import Header from "../homepage/components/Header";
import CustomButton from "@/components/CustomButton";

import Books from "./components/books";
import ReadReviewAndAdd from "./components/readReviewAndAdd";
import BannerAds from "./components/bannerAds";
import NextStepButton from "./components/NextStepButton";

export default function RecommendBookPage() {

	const searchParams = useSearchParams();
	const booksParam = searchParams.get("books");
	const books = booksParam ? JSON.parse(decodeURIComponent(booksParam)) : [];

	useEffect(() => {
		if (books.length > 0) {
			console.log("책 3권 데이터 전달받기 성공", books);
		}
	}, [books]);

	return (
		<CustomColumn
			$width="100%"
			$alignitems="center"
			$justifycontent="flex-start"
			$padding="0"
			$gap="4rem"
		>
			<Header />
			<Books books={books} />
			<ReadReviewAndAdd books={books} />
			<BannerAds />
			<NextStepButton />
		</CustomColumn>
	);
}
