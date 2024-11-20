"use client";

import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Modal from "@/components/modal/Modal";

import CustomFont from "@/components/CustomFont";
import { signOut } from "@/app/actions/user.action";

interface LogoutModalProps {
    onClose: () => void;
}

const LogoutModal = ({ onClose }: LogoutModalProps) => {
    return (
        <Modal onClose={onClose}>
            <CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="2rem">
                <CustomFont $color="black" $font="0.8rem" $fontweight="bold">
                    로그아웃 하시겠습니까?
                </CustomFont>

                <CustomRow $width="100%" $alignitems="center" $justifycontent="center">
                    <CustomButton $width="50%" $height="auto" $padding="0.2rem 0.5rem" $backgroundColor="#473322" onClick={onClose}>
                        <CustomFont $color="white">취소</CustomFont>
                    </CustomButton>
                    <CustomButton $width="50%" $height="auto" $padding="0.2rem 0.5rem" $backgroundColor="transparent" $border="1px solid #473322" onClick={() => signOut()}>
                        <CustomFont $color="#473322">확인</CustomFont>
                    </CustomButton>
                </CustomRow>
            </CustomColumn>
        </Modal>
    );
};

export default LogoutModal;
