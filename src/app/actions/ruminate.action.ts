"use server";

import { fetchData } from "@/api/fetchData";

export const getBookMark = async (shelfBookId: number) => {
    try {
        const data = await fetchData(`/api/bookmark/list?shelfBookId=${shelfBookId}`, "GET");
        console.log("북마크 데이터", data);
        return data;
    } catch (error: any) {
        if (error.message.includes("HTTP ERROR, STATUS:400")) {
            console.log("등록된 책갈피가 없습니다!");
        } else {
            console.error("데이터 요청 중 에러 발생:", error);
        }
    }
};

export const postBookMark = async () => {
    console.log("실행!");
    try {
        const data = await fetchData(`/api/bookmark/add?shelfBookId=49&pageNumber=3&content=황유빈테스트제발`, "POST");
        console.log("추가한 책갈피", data);
    } catch (error: any) {
        if (error.message.includes("HTTP ERROR, STATUS:400")) {
            console.log("책갈피가 없다");
        } else {
            console.error("데이터 요청 중 에러 발생:", error);
        }
    }
};

export const postReview = async (bookId: number, content: string) => {
    const body = { bookId: bookId, content: content };
    console.log(body);
    const data = await fetchData(`/api/shelf/review/add`, "POST", body);
    console.log(data);
    return data
};
