import LoginBtn from "./LoginBtn";
import BackgroundBook from "./BackgroundBook";
import CustomColumn from "@/components/CustomColumn";
export default function Login() {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#1E0F51] to-[#0F0728]">
            <CustomColumn >
                <BackgroundBook title="" />
                <BackgroundBook title="별" />
                <BackgroundBook title="책" />
                <BackgroundBook title="부" />
                <BackgroundBook title="록" />
                <BackgroundBook title="로고" />
                <BackgroundBook title="" />
            </CustomColumn>

            <LoginBtn />
        </div>
    );
}
