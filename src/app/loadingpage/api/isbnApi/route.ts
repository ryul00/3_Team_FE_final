import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	try {
		// message를 query에서 가져오기
		const { searchParams } = new URL(req.url);
		const message = searchParams.get("message");

		if (!message) {
			return NextResponse.json({ error: "message query parameter is required" }, { status: 400 });
		}

		const response = await fetch(`https://api2.isbndb.com/subject/${message}`, {
			method: "GET",
			headers: {
				Authorization: `${process.env.NEXT_PUBLIC_ISBN}`,
			},
		});

		if (!response.ok) {
			console.log(message);
			return NextResponse.json({ error: `ISBN API 오류발생: ${response.statusText}` }, { status: response.status });
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching data from ISBNDB:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
};
