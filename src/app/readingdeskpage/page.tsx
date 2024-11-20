"use client";

import React, { useRef, useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import StyledImg from "@/components/StyledImg";

import DeskHeader from "./components/DeskHeader";
import NowReadingBook from "./components/NowReadingBook";
import Timer from "./components/Timer";
import Radio from "./components/Radio";
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
			<Radio />
			<AddBookMark />
			<StyledImg src={'/bottom_banner_readingdesk.svg'} />
		</CustomColumn>
	);
}
