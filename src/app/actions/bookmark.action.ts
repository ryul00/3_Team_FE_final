"use server";

import { fetchData } from "@/api/fetchData";


//책갈피 추가
export const postBookMark = async (shelfBookId:string,pageNumber:number,content:string) => {
    try {
        const data = await fetchData(`/api/bookmark/add?shelfBookId=${shelfBookId}&pageNumber=${pageNumber}&content=${content}`, "POST");
        console.log("추가한 책갈피", data);
    } catch (error: any) {
        if (error.message.includes("HTTP ERROR, STATUS:400")) {
            console.log("책갈피가 없다");
        } else {
            console.error("데이터 요청 중 에러 발생:", error);
        }
    }
};

//책갈피 삭제
export const handleDeleteBookmark = async (bookmarkId:number) => {
    const response = await fetchData(`api/bookmark/delete?bookmarkId=${bookmarkId}`, "DELETE");
    return response;
};
