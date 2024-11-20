"use client";

import "../scroll.css";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function DoneRead() {
	const router = useRouter();
	return (
		<>
			<CustomRow $width="100%" $justifycontent="flex-start" $alignitems="center">
				<CustomBox $backgroundcolor="#68A8A7" $width="auto" $height="auto" $padding="0.2rem 0.5rem">
					<CustomFont $color="white">다 읽은 책</CustomFont>
				</CustomBox>
			</CustomRow>
			<div className="w-full bg-[#473322] p-4 rounded-tl-[2rem] rounded-tr-[2rem]">
				<div className="w-full h-[10rem] overflow-x-auto flex gap-2 custom-scrollbar">
					{Array.from({ length: 8 }).map((_, index) => (
						<CustomButton
							key={`unread-book-${index}`}
							$backgroundColor="transparent"
							$width="auto"
							$height="auto"
							$padding="0"
							onClick={() => router.push("/readingdeskpage")}
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
