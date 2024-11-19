import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		// 요청 본문에서 데이터 추출
		const { emotions, genres, themes } = await req.json();

		// OpenAI API 요청
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT}`,
			},
			body: JSON.stringify({
				model: "gpt-4-turbo",
				messages: [
					{
						role: "user",
						content: `내가 제공하는 여러가지 키워드를 바탕으로,
						다음 목록 중 내가 읽고 싶은 도서의 카테고리는 무엇일지 예측하라.
						답변 형태는 영어로 된 카테고리 이름 하나만 말하라.
						1. 나의 기분: ${emotions.join(", ")}
						2. 내가 읽고싶은 장르: ${genres.join(", ")}
						3. 내가 읽고싶은 테마: ${themes.join(", ")}
						4. 전체 도서 카테고리 목록:
						Science 과학,
						Poetry 시,
						Folklor 전래동화,
						Fiction 소설,
						History 역사,
						Biography 전기소설 (위인전 같은거),
						Literature 문학,
						Novel 이것도 소설. 차이 알아보기,
						Play 희곡,
						Essay 에세이,
						Encyclopedia 백과사전`,
					},
				],
				temperature: 1,
				max_tokens: 200,
			}),
		});

		const responseData = await response.json();
		const answer = responseData.choices[0]?.message?.content || "응답을 받을 수 없습니다.";

		return NextResponse.json({ message: answer });
	} catch (error) {
		console.error("OpenAI API 요청 오류:", error);
		return NextResponse.json({ error: "chat gpt api 요청에서 오류 발생" });
	}
};
