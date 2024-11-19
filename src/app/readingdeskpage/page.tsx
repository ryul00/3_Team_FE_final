"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import StyledImg from "@/components/StyledImg";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";

import DeskHeader from "./components/DeskHeader";
import NowReadingBook from "./components/NowReadingBook";
import Timer from "./components/Timer";
import BookMarks from "./components/BookMarks";
import AddBookMark from "./components/AddBookMark";

export default function ReadingDeskPage() {

	return (
		<CustomColumn
			$width="100%"
			$alignitems="center"
			$justifycontent="flex-start"
			$padding="0"
			$gap="2rem"
		>
			<CustomColumn $width='100%' $gap='0.5rem'>
				<DeskHeader />
				<NowReadingBook />
				<Timer />
			</CustomColumn>
			<BookMarks />
			<AddBookMark />
			<StyledImg src={'/bottom_banner_readingdesk.svg'} />
		</CustomColumn>
	);
}
