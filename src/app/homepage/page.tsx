// 로딩 시 첫화면

import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Header from "./components/Header";
import Stars from "./components/Stars";
import ArrowButton from "./components/ArrowButton";
import BookShelf from "./components/BookShelf";
import BigBookShelf from "./components/BigBookShelf/BigBookShelf";

export default function Home() {
	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="flex-start" $padding="0" $gap='4vh' className="relative h-screen">
			<Header />
			<Stars />
			<BookShelf />
			<CustomRow $width="90%" $justifycontent="flex-end" $alignitems="center">
				<ArrowButton
					imagePath="/back_button.svg"
					width="w-[10rem]"
					height="h-[4rem]"
					text="새로운 책 가져오기"
				/>
			</CustomRow>
			<BigBookShelf />
		</CustomColumn>
	);
}