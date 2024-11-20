"use client";

import React, { useRef, useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import StyledImg from "@/components/StyledImg";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";

export default function Radio() {
	const mp3Files = [
		{ name: "도로변", file: "/city-traffic-outdoor-6414.mp3" },
		{ name: "교실", file: "/classrom-talk_01-72871.mp3" },
		{ name: "소나기", file: "/heavy-rain-the-day-145472.mp3" },
		{ name: "잠수", file: "/underwater-white-noise-46423.mp3" },
		{ name: "폭포", file: "/waterfall-68094.mp3" },
		{ name: "추위", file: "/wind__artic__cold-6195.mp3" },
	];

	// 오디오 객체 참조
	const audioRefs = useRef<HTMLAudioElement[]>([]);
	const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

	const playAudio = (index: number) => {
		const currentAudio = audioRefs.current[index];

		// 이미 재생 중인 버튼을 다시 누르면 정지
		if (currentPlaying === index) {
			if (currentAudio) {
				currentAudio.pause();
				currentAudio.currentTime = 0;
			}
			setCurrentPlaying(null); // 현재 재생 중인 인덱스 초기화
			return;
		}

		// 다른 오디오 정지
		audioRefs.current.forEach((audio, i) => {
			if (i !== index && audio) {
				audio.pause();
				audio.currentTime = 0;
			}
		});

		// 선택된 오디오 재생, 반복
		if (currentAudio) {
			currentAudio.loop = true; // 반복 재생
			currentAudio.play();
		}

		setCurrentPlaying(index); // 현재 재생 중인 인덱스 저장
	};

	return (
		<div style={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
			{/* Wrapper 안에 icon_radio와 버튼 리스트를 포함 */}
			<StyledImg src="icon_radio.svg" />

			{/* 버튼 리스트 */}
			<div
				style={{
					position: "absolute",
					bottom: "15px",
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					gap: "0.5rem",
					justifyContent: "center",
				}}
			>
				{mp3Files.map((mp3, index) => (
					<CustomButton
						key={index}
						$width="3rem"
						$height="auto"
						$padding="0.2rem 0.3rem"
						$backgroundColor={
							currentPlaying === index ? "#473322" : "#856FCA"
						}
						$borderRadius="5px"
						onClick={() => playAudio(index)}
					>
						<CustomFont $color="white" $fontweight="bold">
							{mp3.name}
						</CustomFont>
					</CustomButton>
				))}
			</div>

			{/* 숨겨진 오디오 태그 */}
			{mp3Files.map((mp3, index) => (
				<audio
					key={index}
					src={mp3.file}
					ref={(el) => {
						if (el) audioRefs.current[index] = el;
					}}
				/>
			))}
		</div>
	);
}
