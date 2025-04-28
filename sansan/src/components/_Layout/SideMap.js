import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.jpg"
import TripDay from "../_element/TripDay";
import exampleImg from "../../assets/image/example.jpg"

const tripPlans = [
    {
        type: 'day',
        title: '🌿1일차: 자연 경관과 액티비티 체험',
        activities: [
            '🚤 인와시로호(猪苗代湖) 탐방 🚴‍♀️',
            '🚤 보트 타기: 잔잔한 물 위를 가르며 시원한 바람을 느껴봐요!',
            '🚴‍♀️ 자전거 대여: 상쾌한 바람을 맞으며 호수를 따라 라이딩~ 🌿',
            '📸 사진 촬영: 반짝이는 호수와 그림 같은 풍경을 배경으로 인생샷 찰칵! 📷✨',
            '자연 속에서 몸과 마음을 힐링하는 하루, 기대되지 않나요? 🌿💙',
        ],
    },
    {
        type: 'image',
        src: exampleImg,
        alt: '여행 이미지',
    },
    {
        type: 'day',
        title: '✨ 2일차: 전통 마을과 자연 경관 즐기기',
        activities: [
            '🏡 오우치주쿠 방문 🌸',
            '에도 시대의 정취가 고스란히 남아 있는 오우치주쿠(大内宿)! ⏳✨',
            '🚶‍♂️ 옛 일본의 분위기 체험',
            '📸 사진 촬영 & 역사 탐방',
        ],
    },
    {
        type: 'day',
        title: '♨️3일차: 온천 체험과 지역 문화 즐기기',
        activities: [
            '🏞️ 이이자카 온천(飯坂温泉) 체험',
            '🍚 온천욕 후, 전통 일본식 아침 식사 🍙✨',
            '🛍️ 현지 시장 & 지역 음식 체험',
            '🏮 전통 시장 탐방',
            '🍜 후쿠시마 특산품 & 미식 투어',
        ],
    },
];

const SideMap = () => {
    const navigate = useNavigate();
    return (
        <SidebarContainer>
            <LogoContainer onClick={() => navigate("/")}>
                <LogoImage src={logo} alt="로고" />SUNSUNTRIP
            </LogoContainer>

            <ContentWrapper>
                {tripPlans.map((item, idx) => {
                    if (item.type === 'day') {
                        return <TripDay key={idx} title={item.title} activities={item.activities} />;
                    } else if (item.type === 'image') {
                        return <TripImage key={idx} src={item.src} alt={item.alt} />;
                    }
                    return null;
                })}
            </ContentWrapper>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.aside`
    width: 380px;
    padding: 50px 15px 0;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: white;
    z-index: 1;

    @media screen and (max-width: 1360px) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    color: #333;
    gap: 10px;
    font-family: 'SUIT', sans-serif;
`;

const LogoImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    object-fit: cover;
`;

const ContentWrapper = styled.div`
    padding: 0 15px;
`;

const TripImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;


export default SideMap;
