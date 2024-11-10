"use client";

// 수정금지
// layout.tsx 파일에서 모든 children을 중앙으로 배치하기 위함

export default function Container({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col items-center justify-center gap-20 min-h-screen">
			{children}
		</div>
	);
}
