"use server";

import { fetchData } from "@/api/fetchData";

export async function updateTimeAPI(bookId: number, lastTime: string): Promise<{ message: string; shelfBook: { lastTime: string; title: string } }> {
	try {
		const endpoint = `/api/shelf/update-lasttime/${bookId}?lastTime=${lastTime}`;

		const response = await fetchData(endpoint, "PUT");

		return response;
	} catch (error) {
		console.error("updateTimeAPI 함수에서 에러 발생:", error);
		throw error;
	}
}
