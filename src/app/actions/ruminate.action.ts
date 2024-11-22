"use server";

import { fetchData } from "@/api/fetchData";

export const getBookMark = async (shelfBookId: number) => {
    const data = await fetchData(`/api/bookmark/list?shelfBookId=${shelfBookId}`, "GET");
    console.log("북마크 데이터", data);
    return data;
};

export const postBookMark = async () => {
    console.log("실행!");
    const data = await fetchData(`/api/bookmark/add?shelfBookId=49&pageNumber=3&content=황유빈테스트제발`, "POST");
    console.log("추가한 책갈피", data);
};

export const postReview = async (bookId: number, content: string) => {
    const body = { bookId: bookId, content: content };
    console.log(body);
    const data = await fetchData(`/api/shelf/review/add`, "POST", body);
    console.log(data);
    return data;
};
