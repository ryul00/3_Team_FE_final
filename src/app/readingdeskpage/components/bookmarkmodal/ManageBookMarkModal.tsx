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
import { handleDeleteBookmark } from "@/app/actions/bookmark.action";

interface BookMarkModalProps {
    onClose: () => void;
    bookmark: bookMarkType[];
}

export default function ManageBookMarkModal({ onClose, bookmark }: BookMarkModalProps) {
    const [bookmarks, setBookmarks] = useState(bookmark);

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
