import React, { useState } from 'react';
import styled from 'styled-components';
import { FiImage, FiMic, FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// server측 메시지
const questions = [
  '여행 목적을 설명해주세요 (힐링/자연/역사/맛집 등)',
  '총 여행 기간을 설명해주세요 (1박 2일 등)',
  '동행 인원 수를 입력해주세요(본인 포함)',
  '특별히 가고 싶은 장소가 있다면 알려주세요',
];

const Chatting = () => {
  // server측 메시지 설정
  const [messages, setMessages] = useState([
    { from: 'server', text: questions[0] }
  ]);

  // 메시지 단계 확인
  const [currentStep, setCurrentStep] = useState(0);
  const [input, setInput] = useState('');

  // 메시지 수정
  const [editMode, setEditMode] = useState(false);
  const [editIdx, setEditIdx] = useState(null);

  const navigate = useNavigate();

  // 가장 최근의 user 메시지 수정
  const lastUserIdx = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].from === 'user') return i;
    }
    return null;
  })();

  // text 창 :: 답변 전송 또는 수정
  const handleSend = () => {
    if (!input.trim()) return;
    let newMessages = [...messages];

    if (editMode && editIdx !== null) {
      // 해당 user 메시지 수정
      newMessages[editIdx] = { from: 'user', text: input };
      setEditMode(false);
      setEditIdx(null);
    } else {
      // 새 답변 추가
      newMessages.push({ from: 'user', text: input });
      if (currentStep + 1 < questions.length) {
        newMessages.push({ from: 'server', text: questions[currentStep + 1] });
      }
      setCurrentStep((step) => step + 1);
    }
    setMessages(newMessages);
    setInput('');
  };

  // 최근 user 답변 수정
  const handleEdit = (idx) => {
    setInput(messages[idx].text);
    setEditMode(true);
    setEditIdx(idx);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
      <PageWrapper>
        <HeaderContainer>
          <InputWrapper>
            <Icon><FiMic /></Icon>
            <Icon><FiImage /></Icon>
            <SearchInput
                type="text"
                placeholder={questions[currentStep] || "질문이 끝났어요!"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                disabled={currentStep >= questions.length}
            />
            <SendIcon onClick={handleSend}>
              {editMode ? '수정' : <FiSend />}
            </SendIcon>
          </InputWrapper>
        </HeaderContainer>
        <ChatContainer>
          {messages.map((msg, idx) => (
              <MessageBubble key={idx} from={msg.from}>
                {msg.text}
                {}
                {msg.from === 'user' && idx === lastUserIdx && !editMode && (
                    <EditButton onClick={() => handleEdit(idx)}>수정</EditButton>
                )}
              </MessageBubble>
          ))}
          <FloatingButton
              onClick={() => navigate("/map")}
              disabled={currentStep < questions.length}
              style={{
                backgroundColor: currentStep < questions.length ? '#666' : '#000',
                cursor: currentStep < questions.length ? 'default' : 'pointer'
              }}
          >
            ✈️ + 일정 생성하기
          </FloatingButton>
        </ChatContainer>
      </PageWrapper>
  );
};


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  position: relative;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  align-self: ${({ from }) => (from === 'user' ? 'flex-end' : 'flex-start')};
  background-color: ${({ from }) => (from === 'user' ? '#ffffff' : '#F5F5F5')};
  color: #333;
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align : left;
  border-bottom-right-radius: ${({ from }) => (from === 'user' ? '0px' : '15px')};
  border-bottom-left-radius: ${({ from }) => (from === 'user' ? '15px' : '0px')};
  position: relative;
`;

const EditButton = styled.button`
  margin-left: 10px;
  background: #ececec;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: #d4d4d4;
  }
`;

const FloatingButton = styled.button`
  align-self: flex-end;
  margin: 50px 0;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(55, 58, 61);
  }
`;

const HeaderContainer = styled.header`
  margin-top : 70px;
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
  margin-bottom : 50px;
  color: #f7f9fb;
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

export default Chatting;
