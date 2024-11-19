"use client";

import React, { useState } from "react";
import CustomColumn from "@/components/CustomColumn";
import Header from "../homepage/components/Header";
import CustomButton from "@/components/CustomButton";

import Books from "./components/books";
import ReadReviewAndAdd from "./components/readReviewAndAdd";
import BannerAds from "./components/bannerAds";
import NextStepButton from "./components/NextStepButton";

export default function RecommendBookPage() {

	return (
		<CustomColumn
			$width="100%"
			$alignitems="center"
			$justifycontent="flex-start"
			$padding="0"
			$gap="4rem"
		>
			<Header />
			<Books />
			<ReadReviewAndAdd />
			<BannerAds />
			<NextStepButton />
		</CustomColumn>
	);
}
