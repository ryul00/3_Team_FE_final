"use client";

import { useEffect, useState } from "react";

interface Star {
	id: number;
	x: number;
	y: number;
	delay: number;
}

export default function Stars() {
	const [stars, setStars] = useState<Star[]>([]);

	// 별 위치 생성 함수
	const generateStars = () => {
		return Array.from({ length: 10 }, (_, index) => ({
			id: index,
			x: Math.random() * 100,
			y: Math.random() * 100,
			delay: Math.random() * 10, // 랜덤 딜레이
		}));
	};

	useEffect(() => {
		setStars(generateStars());

		// 3초마다 위치와 딜레이 갱신
		const interval = setInterval(() => {
			setStars(generateStars());
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-[15vh] overflow-hidden">
			{stars.map((star) => (
				<img
					key={star.id}
					src="/icon_star.svg"
					alt="Star"
					className="absolute w-6 h-6 fade-in-out"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						animationDelay: `${star.delay}s`, // 각 별마다 딜레이 적용
					}}
				/>
			))}
		</div>
	);
}
