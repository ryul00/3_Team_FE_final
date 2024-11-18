"use server";

import { fetchData } from "@/api/fetchData";
import { redirect } from "next/navigation";

// 회원 탈퇴
export const unLinkUser = async () => {
    try {
        const data = await fetchData("/auth/unlink", "GET");
        console.log(data);
        alert("회원 탈퇴 성공!");
        redirect("/loginpage");
    } catch (err) {
        console.error("회원 탈퇴 중 에러 발생", err);
        throw new Error("회원 탈퇴 실패");
    }
};
