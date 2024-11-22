"use client";

import React, { useEffect, useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";

import ManageBookMarkModal from "./bookmarkmodal/ManageBookMarkModal";
import { getBookMark } from "@/app/actions/ruminate.action";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export interface bookMarkType {
    pageNumber: number;
    content: string;
    bookmarkId: number;
}

// 20글자 넘는 문장은 말줄임
const truncateText = (text: string, limit: number = 20): string => (text?.length > limit ? `${text.slice(0, limit)}...` : text);

export default function BookMarks({ book }: { book: any }) {
    const [bookmarks, setBookmarks] = useState<bookMarkType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data } = useQuery({
        queryKey: ["bookmark"],
        queryFn: () => getBookMark(book.shelfBookId),
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <CustomColumn $width="90%" $gap="0.5rem">
            <CustomRow $width="100%" $alignitems="center" $justifycontent="space-between">
                <CustomFont $color="#7A6B52" $font="1rem" $fontweight="bold">
                    나의 책갈피
                </CustomFont>
                <CustomButton
                    $width="auto"
                    $height="auto"
                    $backgroundColor="transparent"
                    $border="1px solid #7A6B52"
                    $borderRadius="1rem"
                    $alignItems="center"
                    $justifyContent="center"
                    $padding="0.2rem 0.5rem"
                    onClick={handleOpenModal}
                >
                    <CustomFont $color="#7A6B52" $font="0.8rem" $fontweight="bold">
                        책갈피 관리
                    </CustomFont>
                </CustomButton>
            </CustomRow>

            <CustomBox
                $width="100%"
                $height="10rem"
                $alignitems="center"
                $justifycontent="center"
                $gap="1rem"
                $backgroundcolor="transparent"
                $border="1px solid #7A6B52"
                $borderradius="1rem"
                $padding="1rem"
            >
                <CustomColumn $width="100%" $gap="0.5rem" $alignitems="center" $justifycontent="center">
                    {data?.length > 0 ? (
                        data?.map((bookmark: bookMarkType) => (
                            <CustomRow key={bookmark.bookmarkId} $width="90%" $justifycontent="space-between" $alignitems="center">
                                <CustomFont $color="#7A6B52" $font="1rem" $fontweight="bold">
                                    {bookmark.pageNumber}쪽
                                </CustomFont>
                                <CustomFont $color="#7A6B52" $font="1rem">
                                    {truncateText(bookmark.content)}
                                </CustomFont>
                            </CustomRow>
                        ))
                    ) : (
                        <CustomFont $color="#7A6B52" $font="1rem">
                            책갈피가 없습니다.
                        </CustomFont>
                    )}
                </CustomColumn>
            </CustomBox>
            {isModalOpen && <ManageBookMarkModal bookmark={data} onClose={handleCloseModal} />}
        </CustomColumn>
    );
}
