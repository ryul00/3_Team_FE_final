"use server";
import { fetchData } from "@/api/fetchData";

export async function getBookShelf() {
	try {

		const response = await fetchData("/api/shelf/books", "GET");
		console.log("응답 데이터:", response);
		return response;
	} catch (error) {
		console.error("API 요청 실패:", error);
	}
}
