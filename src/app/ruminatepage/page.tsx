import React, { Suspense } from "react";
import UI from "./components/UI";

export default function Page() {
    return (
        <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-[#1E0F51] to-[#0F0728] px-4 pt-2 text-white">
            <Suspense fallback={<div>로딩 중...</div>}>
                <UI />
            </Suspense>
        </div>
    );
}
