import { useRouter } from "next/navigation";
import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import ArrowButton from "@/app/homepage/components/ArrowButton";
import CustomButton from "@/components/CustomButton";
import CustomFont from "@/components/CustomFont";

export default function NextStepButton() {
	const router = useRouter();

	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<CustomRow $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
				<ArrowButton
					imagePath="/back_button_2.svg"
					width="w-[10rem]"
					height="h-[4rem]"
					text="다시찾기"
					onClick={() => router.push("/recommendpage")}
				/>
				<ArrowButton
					imagePath="/back_button_2_2.svg"
					width="w-[10rem]"
					height="h-[4rem]"
					text="책장으로"
					onClick={() => router.push("/homepage")}
				/>
			</CustomRow>

			<CustomRow $width="100%" $alignitems="center" $justifycontent="center">
				<ArrowButton
					imagePath="/icon_navi_button.svg"
					width="w-[22rem]"
					height="h-[4rem]"
					text="가장 가까운 도서관으로 출발하기"
					onClick={() => router.push("/navigationpage")}
				/>
			</CustomRow>
		</CustomColumn>
	);
}
