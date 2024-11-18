'use client'
import Image from "next/image";

export const LoginBtn = () => {
    const kakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!}`;
    };

    return (
        <div className="flex justify-center p-20">
            <Image src="/loginBtn.png"alt="로그인 이미지" onClick={kakaoLogin} width="295" height="72" className="hover:cursor-pointer" />
        </div>
    );
};
export default LoginBtn;
