"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import StyledImg from "@/components/StyledImg";

export default function LoadingPage() {

	return (
		<CustomColumn
			$width="100%"
			$height='100vh'
			$alignitems="center"
			$justifycontent="center"
			$gap="4rem"
		>
			<StyledImg src={'/icon_logo.svg'} />

			<CustomColumn $gap='1rem'>
				<p className="text-[#856FCA] font-bold text-base">
					별책부록 사서가 열심히 책을 찾고 있어요.
				</p>
				<p className="text-[#856FCA] font-bold text-base">
					잠시만 기다려주세요...
				</p>
			</CustomColumn>

		</CustomColumn>
	);
}
