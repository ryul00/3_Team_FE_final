import React, { useState, useEffect, useRef } from "react";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";
import Modal from "@/components/modal/Modal";
import { useRouter } from "next/navigation";

import { startReadAPI } from "../api/startReadAPI";
import { updateTimeAPI } from "../api/updateTimeAPI";
import { endReadAPI } from "../api/endReadAPI";
import { againReadAPI } from "../api/againReadAPI";

export default function Timer({ bookDetails }: { bookDetails: { bookId: number; title: string; lastTime: string } | null }) {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const [completeButtonText, setCompleteButtonText] = useState("완독했어요");
    const timerRef = useRef<number | null>(null);
    const router = useRouter();
    const [errorModal, setErrorModal] = useState(false);

    // 컴포넌트 로드 시 전달받은 lastTime으로 초기화
    useEffect(() => {
        if (bookDetails?.lastTime) {
            const [hours, minutes, seconds] = bookDetails.lastTime.split(":").map(Number);
            setTime({ hours, minutes, seconds });
        }
    }, [bookDetails]);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = window.setInterval(() => {
                setTime((prevTime) => {
                    const newSeconds = prevTime.seconds + 1;
                    const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
                    const newHours = prevTime.hours + Math.floor(newMinutes / 60);

                    if (newHours >= 99 && newMinutes % 60 >= 99 && newSeconds % 60 >= 59) {
                        return { hours: 99, minutes: 99, seconds: 59 }; // 최대 99:99:99로 제한 걸어둠
                    }

                    return {
                        hours: Math.min(newHours, 99),
                        minutes: newMinutes % 60,
                        seconds: newSeconds % 60,
                    };
                });
            }, 1000);
        } else if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRunning]);

    // 타이머 시작/멈춤
    const handleStartStop = async () => {
        if (!isRunning) {
            // '시작' 버튼 클릭 시 startReadAPI 호출
            if (bookDetails) {
                await startReadAPI(bookDetails.bookId);
            }
        } else {
            // '멈춤' 버튼 클릭 시 updateTimeAPI 호출
            if (bookDetails) {
                const lastTime = `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;
                await updateTimeAPI(bookDetails.bookId, lastTime);
            }
        }

        setIsRunning((prev) => !prev);
    };

    // 완독했어요/또 읽을래요 버튼
    const handleComplete = async () => {
        if (completeButtonText === "완독했어요") {
            if (bookDetails) {
                try {
                    const response = await endReadAPI(bookDetails.bookId);
                    if (response.status === 400) {
                        setErrorModal(true); // 에러 모달 활성화
                    } else {
                        setCompleteButtonText("또 읽을래요");
                        router.push(`/ruminatepage?shelfBookId=${bookDetails.bookId}`);
                    }
                } catch (error) {
                    console.error("endReadAPI 호출 중 오류 발생:", error);
                    setErrorModal(true); // 에러 발생 시 모달 활성화
                }
            }
        } else if (completeButtonText === "또 읽을래요") {
            // '또 읽을래요' 버튼 클릭 시 againReadAPI 호출
            if (bookDetails) {
                await againReadAPI(bookDetails.bookId);
                setCompleteButtonText("완독했어요");
            }
        }
    };

    const handleModalOpen = () => {
        setErrorModal(true);
    }
    const handleModalClose = () => {
        setErrorModal(false);
    }

    return (
        <CustomBox $width="90%" $height="20rem" $backgroundcolor="#C5A260" $borderradius="2rem" $padding="2rem" $alignitems="center" $justifycontent="center">
            <CustomColumn $width="100%" $height="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
                <CustomBox $backgroundcolor="white" $width="100%" $height="50%" $alignitems="center" $justifycontent="center" $padding="1rem" $borderradius="2rem">
                    <CustomRow $width="100%" $alignitems="center" $justifycontent="space-between">
                        <CustomFont $color="#C5A260" $font="0.8rem" $fontweight="bold">
                            독서한 시간
                        </CustomFont>
                        <CustomFont $color="black" $font="3rem" $fontweight="bold">
                            {String(time.hours).padStart(2, "0")}:{String(time.minutes).padStart(2, "0")}:{String(time.seconds).padStart(2, "0")}
                        </CustomFont>
                    </CustomRow>
                </CustomBox>

                <CustomRow $width="100%" $height="50%" $alignitems="center" $justifycontent="center" $gap="1rem">
                    <CustomColumn $width="50%" $alignitems="center" $justifycontent="center" $gap="1rem">
                        <CustomButton $backgroundColor="#9E5F5F" $width="100%" $height="50%" $borderRadius="1rem" $padding="1rem" onClick={() => setTime({ hours: 0, minutes: 0, seconds: 0 })}>
                            <CustomFont $color="white" $fontweight="bold">
                                초기화
                            </CustomFont>
                        </CustomButton>

                        <CustomButton $backgroundColor="#136D6C" $width="100%" $height="50%" $borderRadius="1rem" $padding="1rem" onClick={handleStartStop}>
                            <CustomFont $color="white" $fontweight="bold">
                                {isRunning ? "멈춤" : "시작"}
                            </CustomFont>
                        </CustomButton>
                    </CustomColumn>

                    <CustomButton $width="50%" $height="100%" $alignItems="center" $justifyContent="center" $backgroundColor="#136D6C" $borderRadius="1rem" $padding="1rem" onClick={handleComplete}>
                        <CustomFont $color="white" $fontweight="bold">
                            {completeButtonText}
                        </CustomFont>
                    </CustomButton>
                </CustomRow>
            </CustomColumn>
            {errorModal && (
                <Modal onClose={handleModalClose}>
                    <CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap='1rem'>
                        <CustomFont $color='black' $font='0.8rem'>독서를 시작해야 완독 처리를 할 수 있습니다!</CustomFont>
                        <CustomButton $width='auto' $height='auto' $padding="0.3rem" $backgroundColor="#473322" onClick={handleModalClose}>
                            <CustomFont $color='white' $font='0.8rem'>확인</CustomFont>
                        </CustomButton>
                    </CustomColumn>
                </Modal>
            )}
        </CustomBox>
    );
}
