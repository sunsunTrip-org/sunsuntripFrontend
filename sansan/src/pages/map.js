import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

function getMapCenter(locations) {
    if (!locations.length) return { lat: 0, lng: 0 };  // 기본값 설정
    if (locations.length === 1) return locations[0];

    const lats = locations.map(l => l.lat);
    const lngs = locations.map(l => l.lng);

    return {
        lat: (Math.max(...lats) + Math.min(...lats)) / 2,
        lng: (Math.max(...lngs) + Math.min(...lngs)) / 2,
    };
}


const Map = () => {

    const mapRef = useRef(null);

    const initMap = useCallback(() => {

        // 마커 변수
        const locations = [
            { lat: 37.3975, lng: 140.3935, title: "Bondi Beach", description: "멋진 해변" },
            { lat: 37.4975, lng: 140.5035, title: "Coogee Beach", description: "조용한 해변" },
            { lat: 37.4975, lng: 140.9035, title: "Coogee Beach", description: "조용한 해변" },
        ];

        // 지도는 마커 위치들의 중심
        const mapCenter = getMapCenter(locations);

        // 지도 생성
        const map = new window.google.maps.Map(mapRef.current, {
            center: mapCenter,
            zoom: 10,
        });

        // 마커 & 인포윈도우 생성
        locations.forEach(({ lat, lng, title, description }) => {
            const marker = new window.google.maps.Marker({
                position: { lat, lng },
                map,
                title,
                icon: {
                    url: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                    scaledSize: new window.google.maps.Size(32, 32),
                    anchor: new window.google.maps.Point(16, 32),
                },
            });

            const infoWindow = new window.google.maps.InfoWindow({
                content: `<div><h3>${title}</h3><p>${description}</p></div>`,
                ariaLabel: title,
            });

            marker.addListener("click", () => {
                infoWindow.open({ anchor: marker, map, shouldFocus: false });
            });
        });


    }, []);

    useEffect(() => {
        // initMap을 전역에서 인식하게 등록
        window.initMap = initMap;

        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=&callback=initMap";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            delete window.initMap;
        };
    }, [initMap]);

    return (
        <PageWrapper>
            <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
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
