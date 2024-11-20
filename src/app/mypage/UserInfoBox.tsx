"use client";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";

import LogoutModal from "./components/modal/LogoutModal";
import UnlinkModal from "./components/modal/UnlinkModal";

import { fetchData } from "@/api/fetchData";
import { useState } from "react";
import { unLinkUser } from "../actions/user.action";
import CustomFont from "@/components/CustomFont";

const UserInfoBox = ({ kakaoId }:{kakaoId:string|undefined}) => {
    const [isUnlinkModalOpen, setIsUnlinkModalOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const handleOpenUnlinkModal = () => {
        setIsUnlinkModalOpen(true);
    };

    const handleCloseUnlinkModal = () => {
        setIsUnlinkModalOpen(false);
    };

    const handleOpenLogoutModal = () => {
        setIsLogoutModalOpen(true);
    };

    const handleCloseLogoutModal = () => {
        setIsLogoutModalOpen(false);
    };

    return (
        <CustomRow $justifycontent="center" $gap="8rem" $width="90%">
            <CustomRow $width="30%">
                <StyledImg src="logo.svg" $width="50%" />
            </CustomRow>
            <CustomColumn $width="70%" $alignitems="flex-start" $justifycontent="center">
                <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
                    <div className="text-[#E3C696] font-bold ">{`ID:${kakaoId}`}</div>
                </CustomRow>
                <CustomButton $width="100%" $height="auto" $backgroundColor="#7A6B52" $color="white" $padding="0.2rem 0.5rem" onClick={handleOpenLogoutModal}>
                    <span className="font-bold">로그아웃</span>
                </CustomButton>
                <CustomButton $width="100%" $height="auto" $color="#7A6B52" $border="1px solid #7A6B52" onClick={handleOpenUnlinkModal} $padding="0.2rem 0.5rem" $backgroundColor="transparent">
                    <span className="font-bold">회원탈퇴</span>
                </CustomButton>
                {isUnlinkModalOpen && <UnlinkModal onClose={handleCloseUnlinkModal} />}

                {isLogoutModalOpen && <LogoutModal onClose={handleCloseLogoutModal} />}
            </CustomColumn>
        </CustomRow>
    );
};

export default UserInfoBox;
