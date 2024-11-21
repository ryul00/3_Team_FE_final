import { fetchData } from "@/api/fetchData";
import UI from "./components/UI";
import { getBookMark, postBookMark } from "../actions/ruminate.action";

export default function page() {
    const data = postBookMark();
  
    console.log(data);

    return (
        <div className="relative w-full min-h-screen flex flex-col  bg-gradient-to-b from-[#1E0F51] to-[#0F0728] px-4 pt-2 text-white">
            <UI />
        </div>
    );
}
