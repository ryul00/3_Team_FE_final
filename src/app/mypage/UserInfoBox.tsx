"use client";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import { useState } from "react";
import { signOut, unLinkUser } from "../actions/user.action";
const UserInfoBox = () => {
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
 

    const onModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <CustomRow $justifycontent="center" $gap="8rem" $width="100%">
            <CustomRow $width="30%">
                <StyledImg src="logo.svg" $width="50%" />
            </CustomRow>
            <CustomColumn>
                {/* 유저 ID */}
                <div className="text-[#E3C696] font-bold ">{`ID:${123}`}</div>
               {/* 회원 탈퇴 버튼 */}
               <CustomButton $color="#7A6B52" $border="1px solid #7A6B52" onClick={() => unLinkUser()}>
                    <span className="font-bold">회원탈퇴</span>
                </CustomButton>
                {/* 로그아웃 버튼 */}
                <CustomButton $backgroundColor="#7A6B52" $color="white"  onClick={()=>signOut()}>
                    <span className="font-bold">로그아웃</span>
                </CustomButton>
               
                {isModalOpen && <div className="bg-black text-white w-[300px] h-52 absolute right-1/3">모달</div>}
            </CustomColumn>
        </CustomRow>
    );
};

export default UserInfoBox;
