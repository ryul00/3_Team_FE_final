// 로딩 시 첫화면

import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";
import CustomFont from "@/components/CustomFont";
import CustomDivider from "@/components/CustomDivider";
import StyledImg from "@/components/StyledImg";

export default function Home() {
	return (
		<CustomColumn $width="90%" $height='90vh' $alignitems="center" $justifycontent="start">
			<CustomFont $color='blue' $font='1rem' $fontweight="bold">여기는 홈화면!</CustomFont>

			<CustomFont $color='black' $font='1rem'>components 폴더에서 각 컴포넌트 사용법을 익히세요.</CustomFont>
			<CustomFont $color='black' $font='1rem'>모든 컴포넌트는 TailwindCss를 적용해서 만들었습니당</CustomFont>

			<CustomButton $width='10rem' $backgroundColor="green">
				<CustomFont $color='white' $font='1rem'>예시 버튼</CustomFont>
			</CustomButton>

			<CustomRow $width="100%">
				<CustomButton $width='10rem' $backgroundColor="#D9D9D9">
					<CustomFont $color='black' $font='1rem'>가로 배치는</CustomFont>
				</CustomButton>

				<CustomButton $width='10rem' $backgroundColor="#D9D9D9">
					<CustomFont $color='black' $font='1rem'>이렇게</CustomFont>
				</CustomButton>
			</CustomRow>

			<CustomDivider $width='100%' $height="1px" $backgroundcolor="black" />

			<CustomBox $width='50%' $height="10vh" $alignitems="start" $justifycontent="start" $backgroundcolor="skyblue" $padding="1rem">
				<CustomFont $color='black' $font='1rem'>예시 박스</CustomFont>
			</CustomBox>

			<StyledImg src={'Icon_TabLogo.png'} $width="5rem" $height="5rem" />
		</CustomColumn>
	);
}