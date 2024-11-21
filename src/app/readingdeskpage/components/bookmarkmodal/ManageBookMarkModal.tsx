"use client";

import React, { useState } from "react";
import Modal from "@/components/modal/Modal";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import NormalInputField from "@/components/modal/NormalInputField";
import ArrowButton from "@/app/homepage/components/ArrowButton";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CustomButton from "@/components/CustomButton";
import { bookMarkType } from "../BookMarks";
import { fetchData } from "@/api/fetchData";
import { handleDeleteBookmark } from "@/app/actions/bookmark.action";

interface BookMarkModalProps {
    onClose: () => void;
    bookmark: bookMarkType[];
}

// const initialBookmarks = [
//     { page: "12쪽", text: "박제가 되어버린 천재를 아시오?" },
//     { page: "47쪽", text: "굿바이. 그대는 이따금 그대가 제일 싫어하는 음식을 탐식하는 아이로니를 실천해 보는 것도 놓을 것 같소." },
//     { page: "12쪽", text: "우리들은 서로 오해하고 있느니라. 설마 아내가 아스피린 대신에 아달린의 정량을 나에게 먹여 왔을까?" },
//     { page: "12쪽", text: "날자, 날자, 날자, 한번만 더 날아보자꾸나." },
// ];

export default function ManageBookMarkModal({ onClose, bookmark }: BookMarkModalProps) {
    const [bookmarks, setBookmarks] = useState(bookmark);

    // // 특정 bookmark 삭제 함수
    // const handleDelete = (index: number) => {
    //     setBookmarks((prevBookmarks) => prevBookmarks.filter((_, i) => i !== index));
    // };

    return (
        <Modal onClose={onClose}>
            <CustomColumn $width="100%" $height="auto" $alignitems="flex-start" $justifycontent="center" $gap="2rem">
                <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
                    <CustomFont $color="#8D6542" $font="1rem" $fontweight="bold">
                        이 책에서 모든 책갈피
                    </CustomFont>
                </CustomRow>

                <CustomColumn $width="100%" $gap="1rem">
                    {bookmarks?.map((bookmark, index) => (
                        <CustomRow key={index} $width="100%" $alignitems="center" $justifycontent="center" $gap="0.5rem">
                            <CustomFont $color="#8D6542" $font="0.8rem" $fontweight="bold">
                                {bookmark.pageNumber}
                            </CustomFont>
                            <NormalInputField defaultValue={bookmark.content} />
                            <CustomButton $width="auto" $height="auto" $backgroundColor="transparent" $padding="0" onClick={() => handleDeleteBookmark(bookmark?.bookmarkId)}>
                                <IoMdCloseCircleOutline style={{ color: "#E27272" }} />
                            </CustomButton>
                        </CustomRow>
                    ))}
                </CustomColumn>
                <CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="flex-end">
                    <ArrowButton imagePath="/modal_back_button_small.svg" width="w-[6rem]" height="h-[2rem]" text="저장" onClick={onClose} />
                </CustomRow>
            </CustomColumn>
        </Modal>
    );
}
