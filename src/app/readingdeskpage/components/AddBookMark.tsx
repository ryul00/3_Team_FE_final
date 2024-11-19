import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";

import ArrowButton from "@/app/homepage/components/ArrowButton";
import StyledImg from "@/components/StyledImg";

export default function AddBookMark() {
	return (
		<CustomColumn $width="90%" $gap="0.5rem">
			<CustomRow $width='100%' $alignitems="center" $justifycontent="flex-end" $height='auto'>
				<ArrowButton
					imagePath="/back_button_bookmark_3.svg"
					width="w-[8rem]"
					height="h-[2rem]"
					text="책갈피 추가"
				/>
			</CustomRow>

			<CustomRow $width='100%' $alignitems="center" $justifycontent="flex-start" $height="auto">
				<StyledImg src={'/icon_readingdesk_book.svg'} />
			</CustomRow>
		</CustomColumn>
	);
}
