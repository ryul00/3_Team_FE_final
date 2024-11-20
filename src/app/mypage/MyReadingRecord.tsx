import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";

const MyReadingRecord = () => {
    return (
        <CustomColumn $width="80%" $alignitems="center" $justifycontent="flex-start">
            <h1 className="text-white font-bold text-xl self-stretch">내 독서</h1>
            <div className="w-full border-2 border-[#7A6B52] flex justify-center gap-16 py-2">
                <CustomRow $width="90%">
                    <CustomColumn $width='50%'>
                        <CustomRow $width='100%' $justifycontent="flex-start">
                            <div className="text-[#D9BD8F] font-bold text-sm">지금까지 다 읽은 책</div>
                        </CustomRow>
                        <CustomRow $width='100%' $justifycontent="flex-start">
                            <div className="text-[#D9BD8F] font-bold text-sm">평균 완독 시간</div>
                        </CustomRow>
                        <CustomRow $width='100%' $justifycontent="flex-start">
                            <div className="text-[#D9BD8F] font-bold text-sm">지금 까지 책갈피 갯수</div>
                        </CustomRow>
                    </CustomColumn>
                    <CustomColumn $width="50%">
                        <CustomRow $width='100%' $justifycontent="flex-end">
                            <div className="text-white font-bold text-md">{`${83}권`}</div>
                        </CustomRow>
                        <CustomRow $width='100%' $justifycontent="flex-end">
                            <div className="text-white font-bold text-md">{`${1}시간 ${34}분`}</div>
                        </CustomRow>
                        <CustomRow $width='100%' $justifycontent="flex-end">
                            <div className="text-white font-bold text-md">{`${114}개`}</div>
                        </CustomRow>
                    </CustomColumn>
                </CustomRow>
            </div>
        </CustomColumn>
    );
};
export default MyReadingRecord;
