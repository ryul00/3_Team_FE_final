import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";

export default function Timer() {

	return (
		<CustomBox $width='90%' $height='20rem' $backgroundcolor="#C5A260" $borderradius="2rem" $padding='2rem' $alignitems="center" $justifycontent="center">
			<CustomColumn $width="100%" $height='100%' $alignitems="center" $justifycontent="center" $gap='1rem'>
				<CustomBox $backgroundcolor="white" $width='100%' $height='50%' $alignitems="center" $justifycontent="center" $padding='1rem' $borderradius="2rem">
					<CustomRow $width='100%' $alignitems="center" $justifycontent="space-between">
						<CustomFont $color='#C5A260' $font='0.8rem' $fontweight="bold">독서한 시간</CustomFont>
						<CustomFont $color='black' $font='3rem' $fontweight="bold">02:47</CustomFont>
					</CustomRow>
				</CustomBox>

				<CustomRow $width='100%' $height='50%' $alignitems="center" $justifycontent="center" $gap='1rem'>
					<CustomColumn $width='50%' $alignitems="center" $justifycontent="center" $gap='1rem'>
						<CustomButton $backgroundColor="#9E5F5F" $width='100%' $height='50%' $borderRadius="1rem" $padding='1rem'>
							<CustomFont $color='white' $fontweight="bold">초기화</CustomFont>
						</CustomButton>

						<CustomButton $backgroundColor="#136D6C" $width='100%' $height='50%' $borderRadius="1rem" $padding='1rem'>
							<CustomFont $color='white' $fontweight="bold">시작/멈춤</CustomFont>
						</CustomButton>
					</CustomColumn>

					<CustomButton $width='50%' $height='100%' $alignItems="center" $justifyContent="center" $backgroundColor="#136D6C" $borderRadius="1rem" $padding='1rem'>
						<CustomFont $color='white' $fontweight="bold">완독했어요</CustomFont>
					</CustomButton>
				</CustomRow>
			</CustomColumn>
		</CustomBox>
	);
}
