import CustomColumn from "@/components/CustomColumn";
import MyReadingRecord from "./MyReadingRecord";
import UserInfoBox from "./UserInfoBox";
import MyPageHeader from "./components/MyPageHeader";

export default function page() {

    return (
        <div className="bg-[#473322] w-full h-full min-h-screen pt-4">
            <CustomColumn $gap="4rem">
                <MyPageHeader />
                <UserInfoBox />
                <MyReadingRecord />
            </CustomColumn>
        </div>
    );
}
