"use client";

import React, { useState } from "react";
import Modal from "@/components/modal/Modal";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";

import ModalInputField from "@/components/modal/ModalInputField";
import ModalTextArea from "@/components/modal/ModalTextArea";
import ArrowButton from "@/app/homepage/components/ArrowButton";

interface BookMarkModalProps {
    onClose: () => void;
    input: any ;
    setInput: any;
    textArea: string|undefined;
    setTextArea: any;
}

export default function BookMarkModal({ onClose, input, setInput, textArea, setTextArea }: BookMarkModalProps) {
    return (
        <Modal onClose={onClose}>
            <CustomColumn $width="100%" $height="20rem" $alignitems="flex-start" $justifycontent="center" $gap="1rem">
                <CustomRow $width="100%" $alignitems="center" $justifycontent="center">
                    <CustomRow $width="40%" $height="auto">
                        <ModalInputField placeholder="" input={input} setInput={setInput} />
                    </CustomRow>
                    <CustomFont $color="#8D6542" $font="1rem">
                        쪽에서 인상깊은 구절은
                    </CustomFont>
                </CustomRow>

                <ModalTextArea placeholder="인상깊은 구절을 새겨주세요." maxLength={50} textArea={textArea} setTextArea={setTextArea} />

                <CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="flex-end">
                    <ArrowButton imagePath="/modal_back_button.svg" width="w-[10rem]" height="h-[4rem]" text="여기에 책갈피 꽂기" onClick={onClose} />
                </CustomRow>
            </CustomColumn>
        </Modal>
    );
}
