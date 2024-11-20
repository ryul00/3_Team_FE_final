import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import { Children } from "react";

const BackgroundBook = ({ title }: { title: string }) => {
    //가장 두꺼운 책 53px, 가장 얇은 책 14px , 높이 :62 고정
    //책장 넓이 412px
    const bookShelf = 412;
    const maxWidth = 53;
    const minWidth = 14;
    let totalWidth = 0;
    const bookList = [];
    while (totalWidth < bookShelf) {
        const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        if (totalWidth + randomWidth <= bookShelf) {
            bookList.push(randomWidth);
            totalWidth = totalWidth + randomWidth;
        } else {
            break;
        }
    }

    const getRandomHeight = () => {
        const minHeight = 60; // 최소 높이
        const maxHeight = 93; // 최대 높이
        return Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    };
    const getRandomGradient = () => {
        const colors = [
            { base: "#FF0000", dark: "#831C1F", light: "#BF282D" }, // Red
            { base: "#0000FF", dark: "#174279", light: "#2B79DF" }, // Blue
            { base: "#008000", dark: "#1D521B", light: "#42B83C" }, // Green
            { base: "#FFA500", dark: "#824115", light: "#E87426" }, // Orange
            { base: "#800080", dark: "#120F1B", light: "#544681" }, // Purple
            { base: "#800080", dark: "#5D8152", light: "#A6E793" }, // Mint
            { base: "#800080", dark: "#473322", light: "#7F5B3D" }, // Brown
            { base: "#800080", dark: "#1B7C7B", light: "#31E2E0" }, // Skyblue
            { base: "#800080", dark: "#893A7D", light: "#EF65DA" }, // Pink
            { base: "#800080", dark: "#212121", light: "#878787" }, // Gray
            { base: "#800080", dark: "#727652", light: "#D5DC98" }, // Ivory
            { base: "#800080", dark: "#5D1645", light: "#C32D91" }, // Wine
            { base: "#800080", dark: "#834D4D", light: "#E98989" }, // Peach
            { base: "#800080", dark: "#5F4E2E", light: "#C5A260" }, // Sand
            { base: "#800080", dark: "#192B13", light: "#559141" }, // DeepGreen
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `linear-gradient(to right, ${randomColor.dark}, ${randomColor.light})`;
    };

    return (
        <CustomColumn $gap="0px" $height="100%">
            <div className="gap-[1px] flex relative">
                {bookList.map((width, index) => {
                    let content;
                    switch (true) {
                        case index === 1 && title === "별":
                        case index === 3 && title === "책":
                        case index === 6 && title === "부":
                        case index === 9 && title === "록":
                            content = (
                                <div
                                    className="text-white font-bold text-5xl opacity-0 w-28 flex justify-center items-center translate-y-5 transition-opacity duration-700 ease-in-out transform animate-fadeIn"
                                    key={index}
                                    style={{ animation: `fadeIn 1s ease forwards ${index * 0.1}s` }} 
                                >
                                    {title}
                                </div>
                            );
                            break;
                        case index === 9 && title === "로고":
                            content = <StyledImg src="logo.svg" $width="30px" $height="100%" $alignSelf="flex-end" key={index} />;
                            break;
                        default:
                            content = <div key={index} style={{ width: `${width}px`, height: `${getRandomHeight()}px`, background: getRandomGradient() }} className="self-end"></div>;
                    }
                    return content;
                })}
            </div>

            <StyledImg src={"bookbatchim.svg"} $margin="0px" $width="100%" />
        </CustomColumn>
    );
};
export default BackgroundBook;
