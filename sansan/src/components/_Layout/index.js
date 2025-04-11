import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../style.css"
import Chatting from '../../pages/chatting';

const Index = () => {
    return (
        <LayoutContainer>
            <Wrap>
                <Sidebar />
                <ContentContainer>
                    <Header />
                    <MainContent>
                        <Routes>
                            <Route path="/" element={<Chatting />} />
                        </Routes>
                    </MainContent>
                </ContentContainer>
                <Widget/>
            </Wrap>
        </LayoutContainer>
    );
};

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

const Widget = styled.div`
    width: 305px;
    position: fixed;
    top: 52px;

    @media screen and (max-width: 1360px) {
        display: none;
    }
`

export default Index;