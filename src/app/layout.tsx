import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container";
import Script from "next/script";
import ReactQueryProvider from "@/config/ReactQueryProvider";

export const metadata: Metadata = {
    title: "별책부록",
    description: "잠들기 전 독서로 힐링할 수 있도록 돕는 서비스",
    icons: {
        icon: "/Icon_TabLogo.png",
    },
};

declare global {
    interface Window {
        kakao: any;
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProvider>
                    <Container>{children}</Container>
                </ReactQueryProvider>
            </body>
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
            <Script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KAKAOAPI}&autoload=false&libraries=services,clusterer,drawing`} />
        </html>
    );
}
