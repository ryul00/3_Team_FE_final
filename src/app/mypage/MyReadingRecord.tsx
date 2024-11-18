import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";

const MyReadingRecord = () => {
    return (
        <CustomColumn $width="80%" $alignitems="center" $justifycontent="flex-start">
            <h1 className="text-white font-bold text-xl self-stretch">내 독서</h1>
            <div className="w-full border-2 border-[#7A6B52] flex justify-center gap-16 py-2">
                <CustomRow $width="100%">
                    <CustomColumn>
                        <div className="text-[#D9BD8F] font-bold text-lg">지금까지 다 읽은 책</div>
                        <div className="text-[#D9BD8F] font-bold text-lg">평균 완독 시간</div>
                        <div className="text-[#D9BD8F] font-bold text-lg">지금 까지 책갈피 갯수</div>
                    </CustomColumn>
                    <CustomColumn>
                        <div className="text-white font-bold text-lg">{`${83}권`}</div>
                        <div className="text-white font-bold text-lg">{`${1}시간 ${34}분`}</div>
                        <div className="text-white font-bold text-lg">{`${114}개`}</div>
                    </CustomColumn>
                </CustomRow>
            </div>
        </CustomColumn>
    );
};
export default MyReadingRecord;
