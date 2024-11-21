"use server";

import { fetchData } from "@/api/fetchData";

export async function addFavoriteAPI(bookId: number) {
	try {
		const endPoint = `/api/shelf/mark-for-reread/${bookId}`;
		const response = await fetchData(endPoint, "PUT");

		const { message, shelfBook } = response;

		if (shelfBook?.status === "또읽을책") {
			return { status: 200, message: "또 읽을 책으로 추가하였습니다!", shelfBook };
		}

		return { status: 200, message: message || "상태가 변경되었습니다.", shelfBook };
	} catch (error: any) {
		console.error("API 에러:", error);

		const statusMatch = error.message?.match(/STATUS:(\d+)/);
		const status = statusMatch ? parseInt(statusMatch[1], 10) : 500;

		throw {
			status,
			message: status === 400
				? "책을 다 읽으신 후 또 읽을 책으로 추가하실 수 있습니다!"
				: "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
		};
	}
}
