"use client";
import React, { useEffect } from "react";
import LibraryData from "../../../../libraryData.json";

const KakaoMap_Navi = () => {
	const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST;

	const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
		const toRadian = (deg: number): number => (deg * Math.PI) / 180;
		const R = 6371; // 지구 반지름 (단위: km)
		const dLat = toRadian(lat2 - lat1);
		const dLng = toRadian(lng2 - lng1);

		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRadian(lat1)) *
			Math.cos(toRadian(lat2)) *
			Math.sin(dLng / 2) *
			Math.sin(dLng / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return R * c; // 단위: km
	};

	const getCarDirection = async (startPoint: { lat: number; lng: number }, endPoint: { lat: number; lng: number }, map: any) => {
		const url = "https://apis-navi.kakaomobility.com/v1/directions";
		const origin = `${startPoint.lng},${startPoint.lat}`;
		const destination = `${endPoint.lng},${endPoint.lat}`;

		const headers = {
			Authorization: `KakaoAK ${REST_API_KEY}`,
			"Content-Type": "application/json",
		};

		const queryParams = new URLSearchParams({
			origin: origin,
			destination: destination,
		});

		const requestUrl = `${url}?${queryParams}`;

		try {
			const response = await fetch(requestUrl, {
				method: "GET",
				headers: headers,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log("카카오 네비게이션 API 응답:", data);

			// guides 배열에서 각 지점 간 폴리라인 그리기
			const guides = data.routes[0].sections[0].guides;

			for (let i = 0; i < guides.length - 1; i++) {
				const startGuide = guides[i];
				const endGuide = guides[i + 1];

				// 시작~끝
				const linePath = [
					new window.kakao.maps.LatLng(startGuide.y, startGuide.x),
					new window.kakao.maps.LatLng(endGuide.y, endGuide.x),
				];

				// 폴리라인 그리기
				const polyline = new window.kakao.maps.Polyline({
					path: linePath,
					strokeWeight: 5,
					strokeColor: "#00A0FF",
					strokeOpacity: 0.8,
					strokeStyle: "solid",
				});

				// 지도에 폴리라인 추가
				polyline.setMap(map);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

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
				const { lat, lng } = await getCurrentLocation();
				console.log("사용자 위치:", lat, lng);

				const mapContainer = document.getElementById("map");
				if (!mapContainer) {
					console.error("지도 컨테이너를 찾을 수 없습니다.");
					return;
				}

				const mapOption = {
					center: new window.kakao.maps.LatLng(lat, lng),
					level: 3,
				};
				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				let closestLibrary: { lat: number; lng: number } | null = null;
				let closestDistance = Infinity;

				const bounds = new window.kakao.maps.LatLngBounds();

				// 사용자 마커 이미지
				const markerImage = new window.kakao.maps.MarkerImage(
					"/icon_marker.svg",
					new window.kakao.maps.Size(32, 34),
					{ offset: new window.kakao.maps.Point(16, 34) }
				);

				// 도서관 마커 이미지
				const libImage = new window.kakao.maps.MarkerImage(
					"/icon_logo.svg",
					new window.kakao.maps.Size(32, 34),
					{ offset: new window.kakao.maps.Point(16, 34) }
				);

				// 사용자 위치 마커
				const userMarker = new window.kakao.maps.Marker({
					position: new window.kakao.maps.LatLng(lat, lng),
					map: map,
					image: markerImage,
				});
				bounds.extend(userMarker.getPosition());

				// let closestLibrary: { lat: number; lng: number } | null = null;
				// let closestDistance = Infinity;

				// 도서관 위치에 마커 표시
				LibraryData.records.forEach((library) => {
					const libraryLat = Number(library["위도"]);
					const libraryLng = Number(library["경도"]);

					if (!isNaN(libraryLat) && !isNaN(libraryLng)) {
						const markerPosition = new window.kakao.maps.LatLng(libraryLat, libraryLng);

						const libraryMarker = new window.kakao.maps.Marker({
							position: markerPosition,
							map: map,
							image: libImage,
						});

						const infowindow = new window.kakao.maps.InfoWindow({
							content: `<div style="padding:5px;">${library["도서관명"]}</div>`,
						});

						window.kakao.maps.event.addListener(libraryMarker, "click", () => {
							infowindow.open(map, libraryMarker);
						});

						// 가장 가까운 도서관 찾기
						const distance = calculateDistance(lat, lng, libraryLat, libraryLng);
						if (distance < closestDistance) {
							closestDistance = distance;
							closestLibrary = { lat: libraryLat, lng: libraryLng };
						}
					}
				});

				// 카카오 네비게이션 API 호출 및 마커 범위 설정
				if (closestLibrary) {
					console.log("가장 가까운 도서관:", closestLibrary);

					// 카카오 네비게이션 API 호출
					await getCarDirection({ lat, lng }, closestLibrary, map);
				}

				map.setBounds(bounds);
				console.log("지도 범위 설정 완료");
			} catch (error) {
				console.error("지도 초기화 중 오류 발생:", error);
			}
		};

		initializeMap();
	}, []);

	return <div id="map" style={{ width: "100%", height: "90vh" }} />;
};

export default KakaoMap_Navi;
