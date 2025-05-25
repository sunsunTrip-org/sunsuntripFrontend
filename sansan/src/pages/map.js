import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SideMap from "../components/_Layout/SideMap";
import axios from "axios";

const locationData = {
    "totalDistance": 24,
    "totalDuration": 3361,
    "dailyPlans": [
        {
            "day": 1,
            "places": [
                {
                    "id": 54,
                    "name": "SAGAAR RATNA Fukushima",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7557137,
                    "longitude": 140.4676831,
                    "stayMinutes": 90
                },
                {
                    "id": 23,
                    "name": "サウナ Ｆ･トゥーリSAUNA F･Tuuli",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7544413,
                    "longitude": 140.4617307,
                    "stayMinutes": 120
                },
                {
                    "id": 75,
                    "name": "Coffee Gourmet",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.75394989999999,
                    "longitude": 140.4621235,
                    "stayMinutes": 90
                },
                {
                    "id": 35,
                    "name": "２４トレーニングジム フィットネス・アミーゴ 福島野田店",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7606965,
                    "longitude": 140.4521188,
                    "stayMinutes": 120
                },
                {
                    "id": 33,
                    "name": "ヘッドスパ専門店 Suu.head spa",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.75536049999999,
                    "longitude": 140.4477863,
                    "stayMinutes": 120
                },
                {
                    "id": 59,
                    "name": "Umakatei Fukushima Eki Pibotto-ten",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7546743,
                    "longitude": 140.4585985,
                    "stayMinutes": 90
                },
                {
                    "id": 28,
                    "name": "酵素風呂 ゆっくり",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.74505,
                    "longitude": 140.46762,
                    "stayMinutes": 120
                },
                {
                    "id": 44,
                    "name": "Hotel Sunroute Fukushima",
                    "category": "ACCOMMODATION",
                    "themes": [],
                    "latitude": 37.75087389999999,
                    "longitude": 140.4644117,
                    "stayMinutes": 480
                }
            ]
        },
        {
            "day": 2,
            "places": [
                {
                    "id": 77,
                    "name": "café120 カフェ イチニーマル",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7538971,
                    "longitude": 140.4642982,
                    "stayMinutes": 90
                },
                {
                    "id": 39,
                    "name": "エステサロンLino Lino",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7639358,
                    "longitude": 140.4708434,
                    "stayMinutes": 120
                },
                {
                    "id": 70,
                    "name": "Kurosawa",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7669375,
                    "longitude": 140.4691744,
                    "stayMinutes": 90
                },
                {
                    "id": 6,
                    "name": "Kotori no Mori",
                    "category": "ATTRACTION",
                    "themes": [
                        "자연"
                    ],
                    "latitude": 37.763605,
                    "longitude": 140.4942263,
                    "stayMinutes": 120
                },
                {
                    "id": 2,
                    "name": "Fukushimashi Kotorinomori Nature Center",
                    "category": "ATTRACTION",
                    "themes": [
                        "자연"
                    ],
                    "latitude": 37.7615276,
                    "longitude": 140.4954429,
                    "stayMinutes": 120
                },
                {
                    "id": 79,
                    "name": "Kawaberry Café",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7686886,
                    "longitude": 140.4935407,
                    "stayMinutes": 90
                },
                {
                    "id": 26,
                    "name": "Healthyland Fukushima",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7656288,
                    "longitude": 140.4922729,
                    "stayMinutes": 120
                },
                {
                    "id": 45,
                    "name": "Hotel Fukushima Hills",
                    "category": "ACCOMMODATION",
                    "themes": [],
                    "latitude": 37.7529775,
                    "longitude": 140.4709342,
                    "stayMinutes": 480
                }
            ]
        },
        {
            "day": 3,
            "places": [
                {
                    "id": 66,
                    "name": "Seraan",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.754781,
                    "longitude": 140.468807,
                    "stayMinutes": 90
                },
                {
                    "id": 27,
                    "name": "ドライヘッドスパ専門店 仙豆のちから 福島店",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7503172,
                    "longitude": 140.4425904,
                    "stayMinutes": 120
                },
                {
                    "id": 68,
                    "name": "Fukushima Hogita Shokudo",
                    "category": "FOOD",
                    "themes": [],
                    "latitude": 37.7401869,
                    "longitude": 140.4508759,
                    "stayMinutes": 90
                },
                {
                    "id": 34,
                    "name": "Rapport【head spa & relaxation】/ 福島市ヘッドスパ",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.7876308,
                    "longitude": 140.4375912,
                    "stayMinutes": 120
                },
                {
                    "id": 29,
                    "name": "嵐の湯福島店",
                    "category": "ATTRACTION",
                    "themes": [
                        "온천"
                    ],
                    "latitude": 37.79273000000001,
                    "longitude": 140.4574149,
                    "stayMinutes": 120
                }
            ]
        }
    ]
};

const markerColors = [
    "red", "green", "blue", "orange", "purple", "pink", "yellow", "cyan", "black",
];

function getMapCenter(coords) {
    if (!coords.length) return { lat: 0, lng: 0 };
    if (coords.length === 1) return coords[0];
    const lats = coords.map((c) => c.lat);
    const lngs = coords.map((c) => c.lng);
    return {
        lat: (Math.min(...lats) + Math.max(...lats)) / 2,
        lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
    };
}

const Map = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    const markersRef = useRef([]);
    const infoWindowsRef = useRef([]);

    // const [locationData, setLocationData] = useState(null);
    const [routeId, setRouteId] = useState(1); // 임시로 1로 설정

    // useEffect(() => {
    //     // 임시: 초기 데이터 직접 설정 (나중에 API 호출로 대체 가능)
    //     setLocationData(window.initialLocationData || null);
    // }, []);

    useEffect(() => {
        if (!window.google || !window.google.maps) {
            console.error("Google Maps API가 로드되지 않았습니다.");
            return;
        }

        if (!map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                center: { lat: 0, lng: 0 },
                zoom: 14,
            });
            setMap(newMap);
            return;
        }

        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];
        infoWindowsRef.current.forEach((iw) => iw.close());
        infoWindowsRef.current = [];

        if (window.polylines) {
            window.polylines.forEach((pline) => pline.setMap(null));
        }
        window.polylines = [];

        locationData.dailyPlans.forEach((dailyPlan, i) => {
            const color = markerColors[i % markerColors.length];
            const dayPositions = [];

            dailyPlan.places.forEach((place) => {
                const position = { lat: place.latitude, lng: place.longitude };
                dayPositions.push(position);

                const marker = new window.google.maps.Marker({
                    position,
                    map,
                    title: `${dailyPlan.day}일차 - ${place.name}`,
                    icon: {
                        url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
                    },
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div><h3>${dailyPlan.day}일차 - ${place.name}</h3><p>카테고리: ${place.category}</p></div>`,
                });

                marker.addListener("click", () => {
                    infoWindowsRef.current.forEach((iw) => iw.close());
                    infoWindow.open({ anchor: marker, map });
                    // setTimeout(() => {
                    //     const btn = document.getElementById(`replace-btn-${place.id}`);
                    //     if (btn) {
                    //         btn.onclick = () => handleReplace(place.name);
                    //     }
                    // }, 0);
                });

                markersRef.current.push(marker);
                infoWindowsRef.current.push(infoWindow);
            });

            // 날짜별로 선 그리기
            if (dayPositions.length > 1) {
                const polyline = new window.google.maps.Polyline({
                    path: dayPositions,
                    geodesic: true,
                    strokeColor: color,
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                });
                polyline.setMap(map);

                // 전역 배열에 저장 (나중에 지우거나 관리하려고)
                window.polylines.push(polyline);
            }
        });

        // 전체 좌표로 중심 잡기 (여기선 첫날부터 쭉 다 합쳐서)
        const allPositions = locationData.dailyPlans.flatMap((d) =>
            d.places.map((p) => ({ lat: p.latitude, lng: p.longitude }))
        );
        if (allPositions.length) {
            const center = getMapCenter(allPositions);
            map.setCenter(center);
        }
    }, [map, locationData]);

    // const handleReplace = async (oldPlaceName) => {
    //     if (!routeId) {
    //         alert("routeId가 없습니다.");
    //         return;
    //     }
    //     try {
    //         const response = await axios.post(
    //             `/api/route/${routeId}/replace`,
    //             null,
    //             { params: { oldPlaceName } }
    //         );
    //         // 응답으로 새 경로 데이터 받음
    //         setLocationData(response.data);
    //     } catch (error) {
    //         console.error("교체 요청 실패:", error);
    //         alert("장소 교체 요청 중 오류가 발생했습니다.");
    //     }
    // };


    return (
        <PageWrapper>
            <SideMap dailyPlans={locationData.dailyPlans} />
            <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: #000;
`;

export default Map;
