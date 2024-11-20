'use server'
import { setAuthCookies } from "@/app/utils/serverCookie";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export async function GET(request: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    console.log(code);
    if (!code) {
        return NextResponse.json({ error: "인가 코드 누락!" }, { status: 400 });
    }
    const response = await fetch(`https://byulchaek-api.shop/auth/kakaoLogin?code=${code}`);
    if (!response.ok) {
        console.error("데이터 패칭 오류!");
        return NextResponse.json({ error: "토큰을 확인해주세여" }, { status: response.status });
    }
    //access_token 값
    const data = await response.json();
    console.log("로그인 페이지 데이터", data);
 
    const cookieStore = await cookies();

    // Access Token 설정 (HTTP-only)
    cookieStore.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure:true,
        path: "/",
        maxAge: 3600, // 1시간
    });
      // Access Token 설정 (HTTP-only)
      cookieStore.set("kakaoId", data.kakaoId, {
        httpOnly: true,
        secure:true,
        path: "/",
        maxAge: 3600, // 1시간
    });

    // Refresh Token 설정 (HTTP-only)
    cookieStore.set("refreshToken", data.refreshToken, {
        httpOnly: false,
        secure: true,
        path: "/",
        maxAge: 3600 * 24 * 7, // 7일
    });
    console.log(cookieStore)

    redirect("/homepage");
}
