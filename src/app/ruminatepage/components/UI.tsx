"use client";
import Header from "@/app/homepage/components/Header";
import CustomColumn from "@/components/CustomColumn";
import Review from "./Review";
import ImagePicker from "./ImagePicker";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBookMark, postReview } from "@/app/actions/ruminate.action";
import { queryClient } from "@/config/ReactQueryProvider";
import Image from "next/image";

interface bookType {
    bookmarkId: number;
    content: string;
    pageNumber: number;
}

const UI = () => {
    const searchParams = useSearchParams();
    const shelfBookId = Number(searchParams.get("shelfBookId"));
    const [review, setReview] = useState("");
    const [bookmarkId, setBookMarkId] = useState(0);

    const { data } = useQuery({
        queryKey: ["bookmark"],
        queryFn: () => getBookMark(shelfBookId),
    });

    const bookId = localStorage.getItem("bookId");
    const postReiveMutation = useMutation({
        mutationFn: () => postReview(Number(bookId), review),
        onSuccess: () => {
            setReview("");
            queryClient.invalidateQueries({ queryKey: ["bookmark"] });
        },
    });
    console.log(data);
    console.log(bookId)
    return (
        <>
            <Header />
            <CustomColumn $gap="2rem">
                <div className="text-white opacity-20">완독을 축하 드립니다</div>
                <div className="text-white opacity-20">오늘의 독서를 반추해보세요</div>
                <Review review={review} setReview={setReview} />
                <div className="w-full ">
                    <h1 className="text-white font-bold">책갈피에서 가장 마음에드는 구문을 골라주세요.</h1>
                    <div className="border-2 border-[#7A6B52] text-[#7A6B52] rounded-3xl overflow-y-auto h-32 px-5 py-3">
                        {data?.map((item: bookType) => (
                            <div
                                className="flex justify-around items-center hover:cursor-pointer w-full hover:bg-white"
                                key={item.bookmarkId}
                                onClick={() => {
                                    setBookMarkId(item.bookmarkId);
                                }}
                            >
                                <div className="flex w-1/4 ">
                                    <div className="w-1/2">{item.pageNumber}</div>
                                    <div>쪽</div>
                                </div>
                                <div className="w-1/3 flex justify-center">{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <h1>{"(선택) 독서 사진을 첨부해주세요"}</h1>
                    <ImagePicker />
                </div>
                <div className="relative hover:cursor-pointer">
                    <span className="text-white absolute font-bold text-2xl right-24 top-1">완료</span>
                    <Image src={"complete.svg"} alt="완료버튼" width={100} height={100} onClick={() => postReiveMutation.mutate()} className="w-full h-full"></Image>
                </div>
            </CustomColumn>
        </>
    );
};
export default UI;
