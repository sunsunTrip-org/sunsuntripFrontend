import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMic, FiImage, FiSend } from 'react-icons/fi';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <HeaderContainer>
            <InputWrapper>
                <Icon><FiMic /></Icon>
                <Icon><FiImage /></Icon>
                <SearchInput
                    type="text"
                    placeholder="여행 목적을 설명해주세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SendIcon><FiSend /></SendIcon>
            </InputWrapper>
        </HeaderContainer>
    );
};;


const HeaderContainer = styled.header`
    margin-top : 80px;
    display: flex;
    justify-content: center;
`;

const InputWrapper = styled.div`
    background: #f7f9fb;
    display: flex;
    align-items: center;
    border-radius: 14px;
    padding: 15px 15px;
    width: 100%;
    max-width: 900px;

    color: #f7f9fb; /* 초기 글자색 */
    border: 1px solid transparent;

    transition: border 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
        border: 1px solid #333333;
        color: #444444;
    }
`;



const Icon = styled.div`
    margin-right: 10px;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
`;

const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    font-size : 0.8rem;
    color: #444;
    outline: none;
    padding: 0 10px;

    &::placeholder {
        color: #ccc;
    }
`;

const SendIcon = styled.div`
    margin-left: 10px;
    font-size: 1rem;
    color: #888;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        color: #444;
    }
`;


export default Header;
