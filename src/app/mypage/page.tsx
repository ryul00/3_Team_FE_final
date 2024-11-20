import CustomColumn from "@/components/CustomColumn";
import MyReadingRecord from "./MyReadingRecord";
import UserInfoBox from "./UserInfoBox";
import MyPageHeader from "./components/MyPageHeader";
import CustomDivider from "@/components/CustomDivider";
import { cookies } from "next/headers";

export default async function page() {
    const cookieStore = await cookies();
    const kakaoId = cookieStore.get("kakaoId")?.value;

    return (
        <div className="bg-[#473322] w-full h-full min-h-screen pt-4">
            <CustomColumn $width="100%" $gap="4rem">
                <CustomColumn $width="100%" $gap="1rem">
                    <MyPageHeader />
                    <UserInfoBox kakaoId={kakaoId} />
                </CustomColumn>
                <CustomDivider $width="100%" $height="1px" $backgroundcolor="#7A6B52" />
                <MyReadingRecord />
            </CustomColumn>
        </div>
    );
}
