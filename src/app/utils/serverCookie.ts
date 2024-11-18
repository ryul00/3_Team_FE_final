"use server";
import { cookies } from "next/headers";

export interface ITokenData {
    accessToken: string;
    refreshToken: string;
}
//쿠키 세팅
export async function setAuthCookies(tokenData: ITokenData) {
    const cookieStore = await cookies();

    //엑세스 토큰
    cookieStore.set("accessToken", tokenData?.accessToken, {
        maxAge: 3600, //1시간
        httpOnly: true,
        secure: true,
    });

    //리프레시 토큰
    cookieStore.set("refreshToken", tokenData?.refreshToken, {
        maxAge: 3600 * 24 * 7, //7일
        httpOnly: true,
        secure: true,
    });
    console.log("서버쿠키의 저장소", cookieStore);
    console.log("서버 쿠키의 엑세스 토큰", tokenData.accessToken);
}

//쿠키 삭제
export async function clearAuthCookies() {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
}
