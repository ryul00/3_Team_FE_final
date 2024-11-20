// 로딩 시 첫화면
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomFont from "@/components/CustomFont";
import KakaoMap_Navi from "./components.tsx/KakaoMap_Navi";
import LibHeader from "../mynearlibrary/comopnents/LibHeader";

export default function Home() {

	return (
		<CustomColumn $width="100%" $height="100vh" $alignitems="center" $justifycontent="center">
			<LibHeader />
			<CustomRow $width="90%" $alignitems="center" $justifycontent="flex-start">
				<CustomFont $color='white' $fontweight="bold" $font='1rem'>가장 가까운 도서관으로 경로를 안내합니다!</CustomFont>
			</CustomRow>
			<KakaoMap_Navi />
		</CustomColumn>
	);
}