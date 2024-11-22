"use client";
import Header from "@/app/homepage/components/Header";
import CustomColumn from "@/components/CustomColumn";
import Review from "./Review";
import ImagePicker from "./ImagePicker";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBookMark, postReview } from "@/app/actions/ruminate.action";
import { queryClient } from "@/config/ReactQueryProvider";
import Image from "next/image";
import CustomRow from "@/components/CustomRow";

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
    const router=useRouter()

    const { data } = useQuery({ queryKey: ["bookmark", shelfBookId], queryFn: () => getBookMark(shelfBookId) });
    const bookId = localStorage.getItem("bookId");
    const postReiveMutation = useMutation({
        mutationFn: () => postReview(Number(bookId), review),
        onSuccess:()=>router.push('/homepage')
    });
    console.log(data);
    console.log(bookId);
    return (
        <>
            <Header />
            <CustomColumn $gap="4rem">
                <CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
                    <p className="text-[#544681] font-bold text-base">완독을 축하드립니다!</p>
                    <p className="text-[#544681] font-bold text-base">오늘의 독서를 반추해보세요</p>
                </CustomColumn>

                <Review review={review} setReview={setReview} />

                <CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
                    <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
                        <p className="text-[white] font-bold text-base">책갈피에서 가장 마음에드는 구문을 골라주세요.</p>
                    </CustomRow>

                    <div className="w-full border-2 border-[#7A6B52] text-[#7A6B52] rounded-3xl overflow-y-auto h-32 px-5 py-3">
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((item: bookType) => (
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
                            ))
                        ) : (
                            <p className="text-[#7A6B52]">책갈피가 없습니다.</p>
                        )}
                    </div>
                </CustomColumn>

                <CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
                    <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
                        <p className="text-[white] font-bold text-base">(선택) 독서 사진을 첨부해주세요.</p>
                    </CustomRow>
                    <ImagePicker />
                </CustomColumn>

                <div className="relative hover:cursor-pointer">
                    <p className="text-[white] absolute right-24 top-2 font-bold text-base">완료</p>
                    <Image src={"complete.svg"} alt="완료버튼" width={100} height={100} onClick={() => postReiveMutation.mutate()} className="w-full h-full"></Image>
                </div>
            </CustomColumn>
        </>
    );
};
export default UI;
