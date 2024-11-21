"use server";

import { fetchData } from "@/api/fetchData";

export async function endReadAPI(bookId: number) {
	try {
		const endPoint = `/api/shelf/finish-reading/${bookId}`;
		const response = await fetchData(endPoint, "PUT");
		return response;
	} catch (error: any) {
		console.error("API 에러:", error);
		const statusMatch = error.message?.match(/STATUS:(\d+)/);
		const status = statusMatch ? parseInt(statusMatch[1], 10) : 500;

		throw {
			status,
			message: status === 400
				? "읽는 중인 책만 완독 버튼을 누르실 수 있습니다!"
				: "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
		};
	}
}

