"use client";

import "../scroll.css";

import NeverRead from "./NeverRead";
import DuringRead from "./DuringRead";
import DoneRead from "./DoneRead";

export default function BigBookShelf() {
	return (
		<div className="w-full h-auto bg-[#8D6542] rounded-tl-[2rem] rounded-tr-[2rem] flex flex-col gap-4 p-4">
			<DuringRead />

			<NeverRead />

			<DoneRead />
		</div>
	);
}
