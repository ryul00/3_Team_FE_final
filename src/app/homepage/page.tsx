// 로딩 시 첫화면
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Header from "./components/Header";
import Stars from "./components/Stars";
import ArrowButton from "./components/ArrowButton";
import BookShelf from "./components/BookShelf";
import BigBookShelf from "./components/BigBookShelf/BigBookShelf";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="flex-start" $padding="0" $gap='4vh' className="relative h-screen">
			<Header />
			<CustomRow $width="90%" $justifycontent="flex-start" $alignitems="center">
				<ArrowButton
					imagePath="/back_nutton_library.svg"
					width="w-[10rem]"
					height="h-[4rem]"
					text="내 근처 도서관"
					onClick={() => router.push("/mynearlibrary")}
				/>
			</CustomRow>
			<Stars />
			<BookShelf />
			<CustomRow $width="90%" $justifycontent="flex-end" $alignitems="center">
				<ArrowButton
					imagePath="/back_button.svg"
					width="w-[10rem]"
					height="h-[4rem]"
					text="새로운 책 가져오기"
					onClick={() => router.push("/recommendpage")}
				/>
			</CustomRow>
			<BigBookShelf />
		</CustomColumn>
	);
}