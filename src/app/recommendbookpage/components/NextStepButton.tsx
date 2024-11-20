import { useRouter } from "next/navigation";
import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import ArrowButton from "@/app/homepage/components/ArrowButton";

export default function NextStepButton() {
	const router = useRouter();

	return (
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
	);
}
