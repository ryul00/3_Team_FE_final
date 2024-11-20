"use client";

import StyledImg from "@/components/StyledImg";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MyPageHeader() {
    const router = useRouter();

    return (
        <CustomRow $width="90%" $alignitems="center" $justifycontent="flex-end">
            <CustomButton $backgroundColor="transparent" $width="auto" $padding="0" onClick={() => router.push("/homepage")}>
                <FaHome style={{ color: "#2C1F13", fontSize: "2rem" }} />
            </CustomButton>
        </CustomRow>
    );
}
