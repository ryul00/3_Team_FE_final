"use client";

import "../scroll.css";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function NeverRead({ books }: { books: any[] }) {
	// console.log('books는', books);
	const router = useRouter();

	const handleBookClick = (bookId: number) => {
		// books 전체 데이터를 로컬 스토리지에 저장
		localStorage.setItem("books", JSON.stringify(books));
		// 클릭한 책의 ID를 로컬 스토리지에 저장
		localStorage.setItem("selectedBookId", bookId.toString());
		router.push("/readingdeskpage");
	};

	return (
		<>
			<CustomRow $width="100%" $justifycontent="flex-start" $alignitems="center">
				<CustomBox $backgroundcolor="#C5A260" $width="auto" $height="auto" $padding="0.2rem 0.5rem">
					<CustomFont $color="white">안 읽은 책</CustomFont>
				</CustomBox>
			</CustomRow>
			<div className="w-full bg-[#473322] p-4 rounded-tl-[2rem] rounded-tr-[2rem]">
				{books.length === 0 ? (
					<CustomRow $width="100%" $alignitems="center" $justifycontent="center">
						<CustomFont $color="white">아직 안 읽은 책이 없네요. 새로운 책을 가지러 갈까요?</CustomFont>
					</CustomRow>
				) : (
					<div className="w-full h-[10rem] overflow-x-auto flex gap-2 custom-scrollbar">
						{books.map((book, index) => (
							<CustomButton
								key={book.shelfBookId || index}
								$backgroundColor="transparent"
								$width="auto"
								$height="auto"
								$padding="0"
								onClick={() => handleBookClick(book.shelfBookId)}
							>
								<div className="bg-[#D9D9D9] w-[100px] h-[100%] flex-shrink-0 rounded-md">
									<img
										src={book.coverImageUrl || "/placeholder-image.jpg"}
										alt={book.title}
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
							</CustomButton>
						))}
					</div>
				)}
			</div>
		</>
	);
}
