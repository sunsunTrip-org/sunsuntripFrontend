import React from 'react';
import styled from 'styled-components';

const TripDay = ({ title, activities }) => {
    return (
        <TripDayContainer>
            <TripTitle>{title}</TripTitle>
            <ActivityList>
                {activities.map((activity, idx) => (
                    <ActivityItem key={idx}>{activity}</ActivityItem>
                ))}
            </ActivityList>
        </TripDayContainer>
    );
};

export default TripDay;

const TripDayContainer = styled.div`
    margin-bottom: 40px;
    text-align: left;
`;

const TripTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #444;
    text-align: left;
`;

const ActivityList = styled.ul`
    padding-left: 1rem;
    list-style: none;
    text-align: left;
`;

const ActivityItem = styled.li`
    margin-bottom: 8px;
    line-height: 1.5;
    text-align: left;
`;
