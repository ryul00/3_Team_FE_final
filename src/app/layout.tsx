import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "별책부록",
  description: "잠들기 전 독서로 힐링할 수 있도록 돕는 서비스",
  icons: {
    icon: "/Icon_TabLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
