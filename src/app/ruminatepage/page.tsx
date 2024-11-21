import { fetchData } from "@/api/fetchData";
import UI from "./components/UI";
import { getBookMark, postBookMark } from "../actions/ruminate.action";
import { useRouter, useSearchParams } from "next/navigation";

export default function page() {
    
    return (
        <div className="relative w-full min-h-screen flex flex-col  bg-gradient-to-b from-[#1E0F51] to-[#0F0728] px-4 pt-2 text-white">
            <UI />
        </div>
    );
}
