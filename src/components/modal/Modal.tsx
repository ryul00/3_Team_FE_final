"use client";

import React from "react";
import CustomBox from "../CustomBox";
import CustomFont from "../CustomFont";
import CustomRow from "../CustomRow";
import CustomBoxRound from "./CustomBoxRound";
import CustomColumn from "../CustomColumn";

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
	return (
		<div className="w-[420px] h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
		flex items-center justify-center bg-black bg-opacity-50 z-50">

			<CustomBoxRound
				$width="80%"
				$height="auto"
				$backgroundcolor="#E2C89B"
				$padding="0"
				$alignitems="flex-start"
				$justifycontent="center"
				className="relative"
			>
				<CustomColumn $width="100%" $gap='1rem'>
					<CustomBox $width="100%" $height="1.5rem" $backgroundcolor="#723D10" $borderradius="0">
						<CustomRow $width="90%" $alignitems="center" $justifycontent="flex-end">
							<button onClick={onClose}>
								<CustomFont $color="#8D6542">X</CustomFont>
							</button>
						</CustomRow>
					</CustomBox>

					<CustomBox $backgroundcolor="transparent" $padding="0.5rem" $width="100%" $height="auto">
						<CustomColumn $width="90%" $alignitems="center" $justifycontent="center">
							<div>{children}</div>
						</CustomColumn>
					</CustomBox>
				</CustomColumn>

			</CustomBoxRound>
		</div>
	);
}
