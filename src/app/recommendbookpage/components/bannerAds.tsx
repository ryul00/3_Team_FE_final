import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";

export default function BannerAds() {

	return (
		<CustomColumn $width="100%" $gap='1rem'>
			<p className="text-[white] font-bold text-sm ">
				이런 책은 어떠세요?
			</p>

			<CustomBox $backgroundcolor="#D9D9D9" $width='100%' $height='3rem' $borderradius="0">
				여기에 배너 광고
			</CustomBox>
		</CustomColumn>
	);
}
