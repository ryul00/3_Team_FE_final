'use client'
import Image from "next/image";

export const LoginBtn = () => {
    const kakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!}`;
    };

    return (
        <div className="flex justify-between p-20 hover:cursor-pointer  group" onClick={kakaoLogin} >
            <div className="flex  bg-[#FEE500]  items-center text-base font-semibold py-5 px-10 gap-3  rounded-full border-2 border-transparent hover:border-2 hover:bg-white group-hover:border-[#fee500] hover:text-[#fee500]">
            <Image src={'chatbubble.svg'} width={30} height={30} alt='채팅 아이콘' />
                <span className=" inline-block  flex-1 whitespace-nowrap text-2xl">카카오 로그인</span>
            </div>
        </div>
    );
};
export default LoginBtn;
