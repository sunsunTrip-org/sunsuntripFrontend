import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.jpg"
import TripDay from "../_element/TripDay";
import exampleImg from "../../assets/image/example.jpg"


const markerColors = [
    "hsl(0, 60%, 45%)",     // red - 채도와 명도 낮춤
    "hsl(120, 50%, 40%)",   // green
    "hsl(210, 60%, 45%)",   // blue
    "hsl(30, 60%, 45%)",    // orange
    "hsl(270, 40%, 50%)",   // purple
    "hsl(330, 50%, 55%)",   // pink
    "hsl(50, 60%, 50%)",    // yellow
    "hsl(180, 50%, 45%)",   // cyan
    "hsl(0, 0%, 30%)",      // black (회색톤으로)
];


function generateTripPlans(dailyPlans) {
    return dailyPlans.map((dayPlan, idx) => {
        const dayNum = idx + 1;
        const highlightColor = markerColors[idx % markerColors.length]; // 색 반복 방지용

        const title = (
            <>
                <span style={{
                backgroundColor: highlightColor,
                color: 'white',
                padding: '2px 6px',
                userSelect: 'none'
            }}>
          {dayNum}일차 여행 코스
        </span>
            </>
        );

        // 음식은 아침, 점심, 저녁으로 분리
        const meals = { 아침: [], 점심: [], 저녁: [] };
        let foodCount = 0;

        // 체험, 숙소 분리
        const attractions = [];
        const accommodations = [];

        dayPlan.places.forEach(place => {
            const { name, category, themes } = place;

            if (category === 'FOOD') {
                foodCount++;
                if (foodCount === 1) meals['아침'].push(name);
                else if (foodCount === 2) meals['점심'].push(name);
                else meals['저녁'].push(name);
            } else if (category === 'ATTRACTION') {
                attractions.push({ name, themes });
            } else if (category === 'ACCOMMODATION') {
                accommodations.push(name);
            }
        });

        // 각 섹션별 리스트 JSX 생성
        const mealSection = (
            <>
                <strong>🍽️ 식사</strong>
                <StyledList>
                    {Object.entries(meals).map(([mealTime, places]) =>
                        places.length > 0 ? (
                            <li key={mealTime}>
                                {mealTime} : {places.join(', ')}
                            </li>
                        ) : null
                    )}
                </StyledList>
            </>
        );

        const attractionSection = (
            <>
                <strong>🎯 체험</strong>
                <StyledList>
                    {attractions.map(({ name, themes }, i) => (
                        <li key={i}>
                            {name} {themes.length > 0 ? `(${themes.join(', ')})` : ''}
                        </li>
                    ))}
                </StyledList>
            </>
        );

        const accommodationSection = (
            <>
                <strong>🏨 숙소</strong>
                <StyledList>
                    {accommodations.map((name, i) => (
                        <li key={i}>{name}</li>
                    ))}
                </StyledList>
            </>
        );


        return {
            type: 'day',
            title,
            activities: [mealSection, attractionSection, accommodationSection],
        };
    });
}







const SideMap = ({dailyPlans}) => {
    const navigate = useNavigate();
    const tripPlans = generateTripPlans(dailyPlans);

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
    width: 340px;
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

const StyledList = styled.ul`
  list-style-type: disc;  /* 작은 점 */
  padding-left: 20px;     /* 들여쓰기 */
  margin: 8px 0;
  color: #444;
  font-size: 14px;
`;


export default SideMap;
