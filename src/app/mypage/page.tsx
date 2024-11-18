import CustomColumn from "@/components/CustomColumn";
import MyReadingRecord from "./MyReadingRecord";
import UserInfoBox from "./UserInfoBox";
import { cookies } from "next/headers";

export default function page() {

    return (
        <div className="bg-[#473322] w-full h-full min-h-screen pt-4">
            <CustomColumn $gap="4rem">
                <UserInfoBox />
                <MyReadingRecord />
            </CustomColumn>
        </div>
    );
}
