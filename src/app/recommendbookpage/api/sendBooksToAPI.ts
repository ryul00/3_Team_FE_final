"use server";
import { fetchData } from "@/api/fetchData";

export async function sendBooksToAPI(books: { title: string; image: string }[]) {
	try {
		const requestBody = {
			books: books.map((book) => ({
				title: book.title,
				coverImageUrl: book.image,
			})),
		};

		const response = await fetchData("/api/recommend/reviews", "POST", requestBody);
		console.log("응답 데이터:", response);
	} catch (error) {
		console.error("API 요청 실패:", error);
	}
}
