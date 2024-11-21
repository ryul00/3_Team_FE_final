"use server";

import { fetchData } from "@/api/fetchData";

export async function startReadAPI(bookId: number) {
	try {
		const endPoint = `/api/shelf/start-reading/${bookId}`;
		const response = await fetchData(endPoint, "PUT");
		return response;
	} catch (error: any) {
		console.error("API 에러:", error);
		const statusMatch = error.message?.match(/STATUS:(\d+)/);
		const status = statusMatch ? parseInt(statusMatch[1], 10) : 500;

		throw {
			status,
			message: status === 400
				? "안 읽은 책만 시작 버튼을 누르실 수 있습니다!"
				: "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
		};
	}
}

