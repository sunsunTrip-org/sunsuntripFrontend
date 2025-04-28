import React from 'react';
import SideChat from './SideChat';
import SideMap from "./SideMap";
import styled from 'styled-components';
import {Routes, Route, Outlet} from "react-router-dom";
// import { useLocation } from "react-router-dom";

import "../style.css"
import Chatting from '../../pages/chatting';
import Map from '../../pages/map';

const Index = () => {
    // const location = useLocation();

    const DefaultLayout = () => {
        return (
            <LayoutContainer>
                <Wrap>
                    <SideChat />
                    <ContentContainer>
                        <MainContent>
                            <Outlet />
                        </MainContent>
                    </ContentContainer>
                </Wrap>
            </LayoutContainer>
        );
    };

    const MapLayout = () => {
        return (
            <LayoutContainer>
                <Wrap style={{ maxWidth: '100%' }}>
                    <SideMap />
                    <MapContentContainer>
                        <Outlet />
                    </MapContentContainer>
                </Wrap>
            </LayoutContainer>
        );
    };


    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Chatting />} />
            </Route>

            <Route element={<MapLayout />}>
                <Route path="/map" element={<Map />} />
            </Route>
        </Routes>
    );
};
const MapContentContainer = styled.div`
    width: 100%;
    height: 100vh;
`;
const LayoutContainer = styled.div`
    font-family: 'SUIT', sans-serif;
    color: #000;
    font-size: 14px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    display: block;
    background: #ffffff;
`;

const Wrap = styled.div`
    width: 100%;
    max-width: var(--global_width_size) ;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 720px;
    flex-shrink: 0;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`;

const MainContent = styled.main`
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
`;

export default Index;