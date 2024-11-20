"use server";

import { fetchData } from "@/api/fetchData";

export async function addFavoriteAPI(bookId: number) {
	try {
		const endPoint = `/api/shelf/mark-for-reread/${bookId}`;
		const response = await fetchData(endPoint, "PUT");
		return response;
	} catch (error: any) {
		console.error("addFavoriteAPI 호출 실패:", error.message);
		throw error;
	}
}
