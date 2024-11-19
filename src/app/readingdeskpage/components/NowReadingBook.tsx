import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import ButtonStar from "./ButtonStar";

export default function NowReadingBook() {

	return (
		<CustomRow $width="90%" $height="auto" $alignitems="center" $justifycontent="space-between">
			<CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start" $gap="0.5rem">
				<CustomFont $color="white" $fontweight="bold" $font="1rem">
					지금 보고 있는 책
				</CustomFont>
				<CustomFont $color="white" $fontweight="bold" $font="1rem">
					-
				</CustomFont>
				<CustomFont $color="white" $fontweight="bold" $font="1rem">
					날개
				</CustomFont>
			</CustomRow>

			<ButtonStar />
		</CustomRow>
	);
}
