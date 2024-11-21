"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";

import ArrowButton from "@/app/homepage/components/ArrowButton";
import StyledImg from "@/components/StyledImg";

import BookMarkModal from "./bookmarkmodal/BookMarkModal";
import "./coffee.css";
import { postBookMark } from "@/app/actions/bookmark.action";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/config/ReactQueryProvider";

export default function AddBookMark({ book }: { book: any }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState<number>(0);
    const [textArea, setTextArea] = useState<string>("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log("여기에 책 꽂기 실행");
        console.log("책갈피 추가 할 것들", input, textArea);
        console.log(book?.shelfBookId, book?.bookmarks);
        bookMarkMutation.mutate();
        setIsModalOpen(false);
    };

    const bookMarkMutation = useMutation({
        mutationFn: () => postBookMark(book?.shelfBookId, input, textArea),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmark"] }),
    });

    return (
        <>
            <CustomColumn $width="90%" $gap="0.5rem">
                <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-end" $height="auto">
                    <ArrowButton imagePath="/back_button_bookmark_3.svg" width="w-[8rem]" height="h-[2rem]" text="책갈피 추가" onClick={handleOpenModal} />
                </CustomRow>

                <CustomRow $width="100%" $alignitems="flex-end" $justifycontent="flex-start" $height="auto">
                    <StyledImg src="/icon_readingdesk_book.svg" />
                    <div className="smoke-container" style={{ width: "7rem", height: "7rem" }}>
                        <div className="smoke smoke-1"></div>
                        <div className="smoke smoke-2"></div>
                        <div className="smoke smoke-3"></div>
                        <StyledImg src="/icon_coffee.png" $width="7rem" />
                    </div>
                </CustomRow>
            </CustomColumn>

            {isModalOpen && <BookMarkModal input={input} setInput={setInput} textArea={textArea} setTextArea={setTextArea} onClose={handleCloseModal} />}
        </>
    );
}
