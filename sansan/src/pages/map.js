import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import sampleMap from '../assets/image/map.png'; // 너가 사용할 지도 이미지 경로로 바꿔!

const Map = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper>
            <MapImage src={sampleMap} alt="지도" />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: #000;
`;

const MapImage = styled.img`
    width: 100%;
    height: 100%;
    //object-fit: cover;
`;

export default Map;
