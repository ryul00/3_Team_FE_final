"use client";

import React, { useEffect, useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import StyledImg from "@/components/StyledImg";

import DeskHeader from "./components/DeskHeader";
import NowReadingBook from "./components/NowReadingBook";
import Timer from "./components/Timer";
import Radio from "./components/Radio";
import BookMarks from "./components/BookMarks";
import AddBookMark from "./components/AddBookMark";
import { getBookInfo } from "./api/getBookInfo";

export default function ReadingDeskPage() {
    const [bookDetails, setBookDetails] = useState<{ bookId: number; title: string; lastTime: string } | null>(null);
    const [selectedBook, setSelectedBook] = useState<any>(null);

    useEffect(() => {
        // 로컬 스토리지에서 선택된 bookId 가져오기
        const selectedBookId = localStorage.getItem("selectedBookId");

        const books = JSON.parse(localStorage.getItem("books") || "[]");

        if (selectedBookId) {
            const book = books.find((b: any) => b.shelfBookId === parseInt(selectedBookId, 10));
            const bookId = parseInt(selectedBookId, 10);

            setSelectedBook(book);

            getBookInfo(parseInt(selectedBookId, 10))
                .then((data) => {
                    console.log("가져온 책 정보:", data);
                    localStorage.setItem("bookId", data.bookId);
                    setBookDetails({
                        bookId,
                        title: data.title,
                        lastTime: data.lastTime,
                    });
                })
                .catch((error) => {
                    console.error("책 정보를 가져오는 중 오류 발생:", error);
                });
        } else {
            console.log("로컬 스토리지에 선택된 책 ID가 없습니다.");
        }
    }, []);

    return (
        <CustomColumn $width="100%" $alignitems="center" $justifycontent="flex-start" $padding="0" $gap="2rem">
            <CustomColumn $width="100%" $gap="0.5rem">
                <DeskHeader />
                <NowReadingBook bookDetails={bookDetails} />
                <Timer bookDetails={bookDetails} />
            </CustomColumn>
            <BookMarks book={selectedBook} />
            <Radio />
            <AddBookMark book={selectedBook} />
            <StyledImg src={"/bottom_banner_readingdesk.svg"} />
        </CustomColumn>
    );
}
