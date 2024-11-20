"use client";

import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Modal from "@/components/modal/Modal";

import CustomFont from "@/components/CustomFont";
import { unLinkUser } from "@/app/actions/user.action";

interface UnlinkModalProps {
    onClose: () => void;
}

const UnlinkModal = ({ onClose }: UnlinkModalProps) => {
    return (
        <Modal onClose={onClose}>
            <CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="2rem">
                <CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="0.5rem">
                    <CustomFont $color="black" $font="0.8rem" $fontweight="bold">
                        탈퇴하시면 책장이 텅 비게 됩니다!
                    </CustomFont>
                    <CustomFont $color="black" $font="0.8rem">
                        정말 탈퇴하시겠어요?
                    </CustomFont>
                </CustomColumn>

                <CustomRow $width="100%" $alignitems="center" $justifycontent="center">
                    <CustomButton $width="50%" $height="auto" $padding="0.2rem 0.5rem" $backgroundColor="#473322" onClick={onClose}>
                        <CustomFont $color="white">취소</CustomFont>
                    </CustomButton>
                    <CustomButton $width="50%" $height="auto" $padding="0.2rem 0.5rem" $backgroundColor="transparent" $border="1px solid #473322" onClick={() => unLinkUser()}>
                        <CustomFont $color="#473322">탈퇴</CustomFont>
                    </CustomButton>
                </CustomRow>
            </CustomColumn>
        </Modal>
    );
};

export default UnlinkModal;
