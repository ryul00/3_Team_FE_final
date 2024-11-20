"use client";

import StyledImg from "@/components/StyledImg";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LibHeader() {
	const router = useRouter();

	return (
		<CustomRow $width="100%" $alignitems="center" $justifycontent="center" $gap="20rem">
			<CustomButton
				$backgroundColor="transparent"
				$width="auto"
				$padding="0"
				onClick={() => router.push("/homepage")}
			>
				<StyledImg src={"/icon_logo.svg"} $width="2rem" $height="2rem" />
			</CustomButton>

			<CustomButton $backgroundColor="transparent" $width="auto" $padding="0" onClick={() => router.push("/mypage")}>
				<FaUserCircle style={{ color: "#2C1F13", fontSize: "2rem" }} />
			</CustomButton>
		</CustomRow>
	);
}
