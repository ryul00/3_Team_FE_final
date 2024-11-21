"use server";

import { cookies } from "next/headers";

export async function fetchData(endPoint: string, method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT", body?: object) {
    const BASE_URL = "https://byulchaek-api.shop";
    const url = `${BASE_URL}${endPoint}`;
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken");
    console.log("데이터 패치의 엑세스 토큰", accessToken);

    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    headers["Authorization"] = `${accessToken?.value}`;
    console.log("헤더", headers);

    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
    });

    if (!response.ok) {
        console.error("요청을 다시 확인 해주세여", response.statusText);
        throw new Error(`HTTP ERROR, STATUS:${response.status}`);
    }
    return response.json();
}
