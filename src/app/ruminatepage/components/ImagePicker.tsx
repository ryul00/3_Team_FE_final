"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const ImagePicker = () => {
    const [imagePicker, setImagePicker] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            setImagePicker(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                setImagePicker(fileReader.result);
            }
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div className="w-full">
            <label
                htmlFor="image"
                className="flex justify-center items-center border-2 border-[#544681] hover:cursor-pointer w-full h-32"
            >
                {imagePicker ? (
                    <Image src={imagePicker} alt="선택된 이미지" width={100} height={100} className="w-full h-32" />
                ) : (
                    <Image src="/plus.svg" alt="+아이콘" width={15} height={15} />
                )}
            </label>
            <input
                ref={inputRef}
                onChange={handleImageChange}
                id="image"
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
            />
        </div>
    );
};

export default ImagePicker;
