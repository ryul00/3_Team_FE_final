"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Header from "../homepage/components/Header";
import CustomButton from "@/components/CustomButton";

import YourFeeling from "./components/YourFeeling";
import YourGenre from "./components/YourGenre";
import YourTema from "./components/YourTema";
import ArrowButton from "../homepage/components/ArrowButton";

export default function RecommendPage() {
	const router = useRouter();
	const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
	const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
	const [loadingMessage, setLoadingMessage] = useState<string>("");

	const handleGPTTest = async () => {
		try {
			const response = await fetch('/recommendpage/api/openAi', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					emotions: selectedEmotions,
					genres: selectedGenres,
					themes: selectedThemes,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				setLoadingMessage(data.message); // message를 상태에 저장
				localStorage.setItem("loadingMessage", data.message);
				router.push(`/loadingpage?message=${encodeURIComponent(data.message)}`);
			} else {
				console.log('API 요청 실패. 상태 코드:', response.status);
			}
		} catch (error) {
			console.error('API 요청 오류:', error);
		}
	};

	return (
		<CustomColumn
			$width="100%"
			$alignitems="center"
			$justifycontent="flex-start"
			$padding="0"
			$gap="4rem"
		>
			<Header />
			<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap='2rem'>
				<p className="text-[#544681] font-bold text-base">
					안녕하세요, 저는 별책부록의 사서 AI입니다.
				</p>
				<p className="text-[#544681] font-bold text-base">
					당신에게 어울리는 새로운 책을 찾아드릴게요.
				</p>
			</CustomColumn>

			<YourFeeling setSelectedEmotions={setSelectedEmotions} />
			<YourGenre setSelectedGenres={setSelectedGenres} />
			<YourTema setSelectedThemes={setSelectedThemes} />

			<ArrowButton
				imagePath="/back_button.svg"
				width="w-[15rem]"
				height="h-[6rem]"
				text="다음으로"
				textSize="text-lg"
				textWeight="font-bold"
				onClick={handleGPTTest}
			/>
		</CustomColumn>
	);
}
