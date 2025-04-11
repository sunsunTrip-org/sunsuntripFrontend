// ChatPage.js

import React from 'react';
import styled from 'styled-components';

const Chatting = () => {
  const messages = [
    { from: 'server', text: '여행 목적을 설명해주세요' },
    { from: 'user', text: '후쿠시마의 다양한 자연경관을 보고싶어! 산, 바다, 계곡 혹은 후쿠시마만의 특색이 있다면 소개해줘' },
    { from: 'server', text: '여행 기간을 첫째날 ~ 마지막 날짜로 설명해주세요' },
];

  return (
    <PageWrapper>

      <ChatContainer>
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} from={msg.from}>
            {msg.text}
          </MessageBubble>
        ))}
      </ChatContainer>
    </PageWrapper>
  );
};
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  background: #ffffff;
  margin-top : 40px;
  
`;


const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  align-self: ${({ from }) => (from === 'user' ? 'flex-end' : 'flex-start')};
  background-color: ${({ from }) => (from === 'user' ? '#ffffff' : '#F5F5F5')};
  color: #333;
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align : left;

  border-bottom-right-radius: ${({ from }) => (from === 'user' ? '0px' : '15px')};
  border-bottom-left-radius: ${({ from }) => (from === 'user' ? '15px' : '0px')};
`;

export default Chatting;
