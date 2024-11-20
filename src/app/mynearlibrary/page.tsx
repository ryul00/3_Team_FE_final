// 로딩 시 첫화면
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import LibHeader from "./comopnents/LibHeader";
import KakaoMap from "../homepage/components/KakaoMap";

export default function Home() {

	return (
		<CustomColumn $width="100%" $height="100vh" $alignitems="center" $justifycontent="center">
			<LibHeader />
			<CustomRow $width="90%" $alignitems="center" $justifycontent="flex-start">
				<CustomFont $color='white' $fontweight="bold" $font='1rem'>내 근처 모든 도서관을 조회했어요.</CustomFont>
			</CustomRow>
			<KakaoMap />
		</CustomColumn>
	);
}