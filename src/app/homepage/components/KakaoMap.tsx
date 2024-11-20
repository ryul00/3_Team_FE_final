"use client";
import React, { useEffect, useState } from "react";
import LibraryData from "../../../../libraryData.json";
import { CgSpinner } from "react-icons/cg";

const KakaoMap = () => {
    const [mapisLoading, setMapisLoading] = useState(true);
    useEffect(() => {
        const loadKakaoMap = () => {
            return new Promise<void>((resolve, reject) => {
                if (window.kakao && window.kakao.maps) {
                    window.kakao.maps.load(() => resolve());
                } else {
                    reject(new Error("Kakao 지도 API 로드 실패"));
                }
            });
        };

        const getCurrentLocation = () => {
            return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            resolve({ lat: latitude, lng: longitude });
                        },
                        (error) => {
                            console.error("위치 정보 가져오기 실패:", error);
                            reject(error);
                        }
                    );
                } else {
                    reject(new Error("Geolocation을 지원하지 않는 브라우저입니다."));
                }
            });
        };

        const initializeMap = async () => {
            try {
                await loadKakaoMap();
                setMapisLoading(false);
                const { lat, lng } = await getCurrentLocation();
                console.log("사용자 위치:", lat, lng);

                const mapContainer = document.getElementById("map");
                if (!mapContainer) {
                    console.error("지도 컨테이너를 찾을 수 없습니다.");
                    return;
                }

                // 지도 옵션 설정
                const mapOption = {
                    center: new window.kakao.maps.LatLng(lat, lng),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                const bounds = new window.kakao.maps.LatLngBounds();

                // 사용자 마커 이미지 설정
                const markerImage = new window.kakao.maps.MarkerImage(
                    "/icon_marker.svg",
                    new window.kakao.maps.Size(32, 34),
                    { offset: new window.kakao.maps.Point(16, 34) } // 마커의 기준 좌표 (이미지의 중심점)
                );

                // 도서관 마커 이미지 설정
                const libImage = new window.kakao.maps.MarkerImage(
                    "/icon_logo.svg",
                    new window.kakao.maps.Size(32, 34),
                    { offset: new window.kakao.maps.Point(16, 34) } // 마커의 기준 좌표 (이미지의 중심점)
                );

                // 사용자 위치 마커
                const userMarker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(lat, lng),
                    map: map,
                    image: markerImage,
                });
                bounds.extend(userMarker.getPosition());

                // 도서관 데이터 마커
                LibraryData.records.forEach((library) => {
                    const latitude = Number(library["위도"]);
                    const longitude = Number(library["경도"]);

                    if (!isNaN(latitude) && !isNaN(longitude)) {
                        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

                        // 도서관 위치에 마커 생성
                        const libraryMarker = new window.kakao.maps.Marker({
                            position: markerPosition,
                            map: map,
                            image: libImage,
                        });

                        // 마커에 클릭 이벤트 추가
                        const infowindow = new window.kakao.maps.InfoWindow({
                            content: `<div style="padding:5px;">${library["도서관명"]}</div>`,
                        });
                        window.kakao.maps.event.addListener(libraryMarker, "click", () => {
                            infowindow.open(map, libraryMarker);
                        });
                    }
                });

                map.setBounds(bounds);
                console.log("지도 범위 설정 완료");
            } catch (error) {
                console.error("지도 초기화 중 오류 발생:", error);
            }
        };

        initializeMap();
    }, []);

    return (
        <>
            {mapisLoading ? (
                <div className="w-full h-[90vh] text-center text-white flex justify-center">
                    <CgSpinner className="animate-spin w-[100px] h-[100px]"></CgSpinner>
                </div>
            ) : (
                <div id="map" style={{ width: "100%", height: "90vh" }} />
            )}
        </>
    );
};

export default KakaoMap;
