"use client";

import StyledImg from "@/components/StyledImg";
import "./scroll.css";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import CustomButton from "@/components/CustomButton";

export default function BookShelf() {
	return (
		<>
			<CustomRow $width="90%" $justifycontent="flex-end" $alignitems="center">
				<CustomBox $backgroundcolor="#D1A325" $width="auto" $height="auto" $padding="0.2rem 0.5rem">
					<CustomFont $color="white">또 읽을 책</CustomFont>
				</CustomBox>
			</CustomRow>
			<div className="relative w-full h-[10vh] flex items-center justify-center">
				<div className="relative w-full h-[10vh] flex flex-col items-center justify-start">
					<div className="z-10 w-full max-w-[75%] h-[15vh] overflow-x-auto flex gap-2.5 custom-scrollbar">
						{/* 나중에 실제 또 읽을 책 표지 이미지 데이터 출력으로 수정하기 */}
						{Array.from({ length: 6 }).map((_, index) => (
							<CustomButton
								key={`to-read-book-${index}`}
								$backgroundColor="transparent"
								$width="auto"
								$height="auto"
								$padding="0"
							>
								<div className="bg-[#D9D9D9] w-[65px] h-full flex-shrink-0 rounded-md"></div>
							</CustomButton>
						))}
					</div>
					<StyledImg
						src={"/icon_bookShelf.svg"}
						$width="95%"
						className="absolute bottom-0 transform translate-y-[30%] z-0"
					/>
				</div>
			</div>
		</>
	);
}
