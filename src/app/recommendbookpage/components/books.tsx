"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import CustomBox from "@/components/CustomBox";
import CustomFont from "@/components/CustomFont";

const recommendations = ["추천책1", "추천책2", "추천책3"];

export default function Books() {
	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="2rem">
			<p className="text-[#544681] font-bold text-base">
				당신에게 어울리는 책을 찾았어요!
			</p>

			<CustomRow $width="100%" $gap="1rem">
				{recommendations.map((book, index) => (
					<CustomBox
						key={index}
						$width="25%"
						$height="10rem"
						$backgroundcolor="#D9D9D9"
						$borderradius="0.5rem"
					>
						{book}
					</CustomBox>
				))}
			</CustomRow>
		</CustomColumn>


	);
}
