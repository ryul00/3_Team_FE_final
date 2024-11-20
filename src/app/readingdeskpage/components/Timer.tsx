import React, { useState, useEffect, useRef } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";

export default function Timer() {
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
	const [isRunning, setIsRunning] = useState(false);
	const timerRef = useRef<number | null>(null);

	// 컴포넌트 로드 시 localStorage에서 시간 복원
	useEffect(() => {
		const savedTime = localStorage.getItem("timer");
		if (savedTime) {
			setTime(JSON.parse(savedTime));
		}
	}, []);

	// 타이머가 실행 중일 때 초를 증가
	useEffect(() => {
		if (isRunning) {
			timerRef.current = window.setInterval(() => {
				setTime((prevTime) => {
					const newSeconds = prevTime.seconds + 1;
					const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
					const newHours = prevTime.hours + Math.floor(newMinutes / 60);

					if (newHours >= 99 && newMinutes % 60 >= 99 && newSeconds % 60 >= 59) {
						return { hours: 99, minutes: 99, seconds: 59 }; // 최대 99:99:99로 제한 걸어둠
					}

					return {
						hours: Math.min(newHours, 99),
						minutes: newMinutes % 60,
						seconds: newSeconds % 60,
					};
				});
			}, 1000);
		} else if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isRunning]);

	// 시간 변경 시 localStorage에 저장
	useEffect(() => {
		localStorage.setItem("timer", JSON.stringify(time));
	}, [time]);

	// 타이머 시작/멈춤 함수
	const handleStartStop = () => {
		setIsRunning((prev) => !prev);
	};

	// 타이머 초기화 함수
	const handleReset = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
		setIsRunning(false);
		setTime({ hours: 0, minutes: 0, seconds: 0 });
		localStorage.removeItem("timer");
	};

	return (
		<CustomBox
			$width="90%"
			$height="20rem"
			$backgroundcolor="#C5A260"
			$borderradius="2rem"
			$padding="2rem"
			$alignitems="center"
			$justifycontent="center"
		>
			<CustomColumn
				$width="100%"
				$height="100%"
				$alignitems="center"
				$justifycontent="center"
				$gap="1rem"
			>
				<CustomBox
					$backgroundcolor="white"
					$width="100%"
					$height="50%"
					$alignitems="center"
					$justifycontent="center"
					$padding="1rem"
					$borderradius="2rem"
				>
					<CustomRow $width="100%" $alignitems="center" $justifycontent="space-between">
						<CustomFont $color="#C5A260" $font="0.8rem" $fontweight="bold">
							독서한 시간
						</CustomFont>
						<CustomFont $color="black" $font="3rem" $fontweight="bold">
							{String(time.hours).padStart(2, "0")}:
							{String(time.minutes).padStart(2, "0")}:
							{String(time.seconds).padStart(2, "0")}
						</CustomFont>
					</CustomRow>
				</CustomBox>

				<CustomRow $width="100%" $height="50%" $alignitems="center" $justifycontent="center" $gap="1rem">
					<CustomColumn $width="50%" $alignitems="center" $justifycontent="center" $gap="1rem">
						<CustomButton
							$backgroundColor="#9E5F5F"
							$width="100%"
							$height="50%"
							$borderRadius="1rem"
							$padding="1rem"
							onClick={handleReset}
						>
							<CustomFont $color="white" $fontweight="bold">
								초기화
							</CustomFont>
						</CustomButton>

						<CustomButton
							$backgroundColor="#136D6C"
							$width="100%"
							$height="50%"
							$borderRadius="1rem"
							$padding="1rem"
							onClick={handleStartStop}
						>
							<CustomFont $color="white" $fontweight="bold">
								{isRunning ? "멈춤" : "시작"}
							</CustomFont>
						</CustomButton>
					</CustomColumn>

					<CustomButton
						$width="50%"
						$height="100%"
						$alignItems="center"
						$justifyContent="center"
						$backgroundColor="#136D6C"
						$borderRadius="1rem"
						$padding="1rem"
					>
						<CustomFont $color="white" $fontweight="bold">
							완독했어요
						</CustomFont>
					</CustomButton>
				</CustomRow>
			</CustomColumn>
		</CustomBox>
	);
}
