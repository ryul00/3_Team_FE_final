import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import Image from "next/image";

export default function page() {
    
    return (
        <div className="w-full min-h-screen flex flex-col  bg-gradient-to-b from-[#1E0F51] to-[#0F0728] px-8">
            <Image src={"logo.svg"} width={10} height={10} alt="로고" className="w-4 h-auto"></Image>
            <CustomColumn $gap="2rem">
                <div className="text-white opacity-20">완독을 축하 드립니다</div>
                <div className="text-white opacity-20">오늘의 독서를 반추해보세요</div>
                <div className="text-white w-full flex flex-col gap-4">
                    <h1 className="font-bold">한 줄 감상을 써주세요.</h1>
                    <input type="text" className="bg-transparent font-bold border-2 border-[#544681] h-10 p-2" placeholder="한 줄 감상평을 작성해주세요"/>
                </div>
                <div className="w-full ">
                    <h1 className="text-white font-bold">
                        책갈피에서 가장 마음에드는 구문을 골라주세요.
                    </h1>
                    <div className="border-2 border-[#7A6B52] rounded-3xl ">
                        
                    </div>
                </div>
            </CustomColumn>
        </div>
    );
}
