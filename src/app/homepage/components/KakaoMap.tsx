"use client";
import React, { useEffect } from "react";
import LibraryData from '../../../../libraryData.json';

const KakaoMap = () => {
	useEffect(() => {
		if (window.kakao) {
			console.log('window.kakao 인식 성공');
			window.kakao.maps.load(() => {
				const mapContainer = document.getElementById("map");
				const mapOption = {
					center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 초기 위치
					level: 3, // 초기 줌 레벨
				};

				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				const addMarker = (position: any, title: string) => {
					const marker = new window.kakao.maps.Marker({
						map: map,
						position: position,
					});

					const infowindow = new window.kakao.maps.InfoWindow({
						content: `<div style="padding:5px;">${title}</div>`,
					});

					// 마커에 이벤트 리스너 등록
					window.kakao.maps.event.addListener(marker, 'mouseover', () => {
						infowindow.open(map, marker);
					});
					window.kakao.maps.event.addListener(marker, 'mouseout', () => {
						infowindow.close();
					});
				};

				// LibraryData의 위도와 경도를 사용하여 마커 추가
				LibraryData.records.forEach((library) => {
					const latitude = Number(library["위도"]);
					const longitude = Number(library["경도"]);

					const libraryName = library["도서관명"];

					// 위도와 경도가 올바른지 확인
					// const latitude = latitudeRaw ? parseFloat(latitudeRaw) : NaN;
					// const longitude = longitudeRaw ? parseFloat(longitudeRaw) : NaN;

					console.log(`도서관명: ${libraryName}, 위도: ${latitude}, 경도: ${longitude}`);

					if (!isNaN(latitude) && !isNaN(longitude)) {
						const coords = new window.kakao.maps.LatLng(latitude, longitude);
						addMarker(coords, libraryName); // 유효한 좌표만 마커 추가
					} else {
						console.error(`유효하지 않은 좌표: ${libraryName} (위도: ${latitude}, 경도: ${longitude})`);
					}
				});
			});
		}
	}, []);

	return <div id="map" style={{ width: "100%", height: "90vh" }} />;
};

export default KakaoMap;
