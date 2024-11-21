"use client";
import Header from "@/app/homepage/components/Header";
import CustomColumn from "@/components/CustomColumn";
import Review from "./Review";
import ImagePicker from "./ImagePicker";
import { useState } from "react";

const UI = () => {
    const [review, setReview] = useState<string>("");
    return (
        <>
            <Header />
            <CustomColumn $gap="2rem">
                <div className="text-white opacity-20">완독을 축하 드립니다</div>
                <div className="text-white opacity-20">오늘의 독서를 반추해보세요</div>
                <Review review={review} setReview={setReview} />
                <div className="w-full ">
                    <h1 className="text-white font-bold">책갈피에서 가장 마음에드는 구문을 골라주세요.</h1>
                    <div className="border-2 border-[#7A6B52] rounded-3xl "></div>
                </div>
                <div className="w-full">
                    <h1>{"(선택) 독서 사진을 첨부해주세요"}</h1>
                    <ImagePicker />
                </div>
            </CustomColumn>
        </>
    );
};
export default UI;
