"use client";

import { fetchData } from "@/api/fetchData";

export async function getBookInfo(shelfBookId: number): Promise<{ lastTime: string; title: string }> {
	try {
		const endpoint = `/api/shelf/shelfbook-details/${shelfBookId}`;

		const response = await fetchData(endpoint, "GET");

		const { lastTime, title } = response;
		return { lastTime, title };
	} catch (error) {
		console.error("getBookInfo 함수에서 에러 발생:", error);
		throw error;
	}
}
