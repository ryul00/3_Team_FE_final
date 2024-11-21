import { ChangeEvent } from "react";

const Review = ({ review, setReview }: { review: string; setReview:any}) => {
    return (
        <div className="text-white w-full flex flex-col gap-4">
            <h1 className="font-bold">한 줄 감상을 써주세요.</h1>
            <input
                value={review}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setReview(e.target.value)}
                type="text"
                className="bg-transparent font-bold border-2 border-[#544681] h-10 p-2"
                placeholder="한 줄 감상평을 작성해주세요"
            />
        </div>
    );
};
export default Review;
