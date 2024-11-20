"use server";
import { fetchData } from "@/api/fetchData";

export async function addBookByAPI(title: string): Promise<any> {
	try {
		const response = await fetchData(
			`/api/recommend/add-to-shelf?title=${encodeURIComponent(title)}`,
			"POST"
		);
		console.log("책 추가 API 응답:", response);
		return response;
	} catch (error) {
		console.error("책 추가 요청 실패:", error);
		throw error;
	}
}
