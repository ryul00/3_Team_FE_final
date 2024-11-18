"use client";

import "../scroll.css";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

export default function NeverRead() {
	return (
		<>
			<CustomRow $width="100%" $justifycontent="flex-start" $alignitems="center">
				<CustomBox $backgroundcolor="#C5A260" $width="auto" $height="auto" $padding="0.2rem 0.5rem">
					<CustomFont $color="white">안 읽은 책</CustomFont>
				</CustomBox>
			</CustomRow>
			<div className="w-full bg-[#473322] p-4 rounded-tl-[2rem] rounded-tr-[2rem]">
				<div className="w-full h-[10rem] overflow-x-auto flex gap-2 custom-scrollbar">
					{Array.from({ length: 6 }).map((_, index) => (
						<CustomButton
							key={`partially-read-book-${index}`}
							$backgroundColor="transparent"
							$width="auto"
							$height="auto"
							$padding="0"
						>
							<div className="bg-[#D9D9D9] w-[100px] h-[100%] flex-shrink-0 rounded-md">
								책{index + 1}
							</div>
						</CustomButton>
					))}
				</div>
			</div>
		</>
	);
}
