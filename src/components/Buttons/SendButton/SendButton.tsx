import styled from "styled-components";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
const StyledSendButton = styled.button<{
  variant?: "error" | "info";
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  width: 208px;
  padding: 0 22px;
  border: 0;
  border-radius: 28px;
  color: #f7f7f7;
  background: #039be5;
  cursor: pointer;
  ${(props) => props.variant === "error" && `background: #d62959;`}
  ${(props) => props.variant === "info" && `background: #F9A825`}
`;

const StyledIcon = styled.span`
  font-size: 30px;
  display: flex;
  animation: ${(props) =>
    props.className?.includes("sending") ? "iconAnimation 5s both" : "none"};
  @keyframes iconAnimation {
    0%,
    5% {
      translate: 0 0;
    }
    20%,
    30% {
      translate: -250px 0;
    }
    40% {
      translate: 200px 0;
      scale: 2;
    }
    40.1% {
      translate: 200px -60px;
      scale: 1;
    }
    40.2% {
      translate: 34px -60px;
    }
    45%,
    95% {
      translate: 34px 0;
    }
    100% {
      translate: 0 0;
    }
  }
`;

const StyledText = styled.span`
  position: absolute;
  left: 64px;
  display: block;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 600;
  animation: ${(props) =>
    props.className?.includes("sending") ? "textAnimation 5s both" : "none"};
  @keyframes textAnimation {
    0%,
    30% {
      translate: 0 0;
    }
    39.9% {
      translate: 0 100px;
    }
    40% {
      translate: 300px 100px;
    }
    40.1% {
      translate: 300px -60px;
    }
    40.2% {
      translate: 33px -60px;
    }
    45% {
      translate: 33px 0;
    }
    95% {
      translate: 33px 0;
    }
    100% {
      translate: 0 0;
    }
  }
`;

type Props = {
  children: React.ReactNode;
  variant?: "error" | "info";
};
const SendButton: React.FC<Props> = ({ children, variant }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    console.log("click");
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };
  return (
    <>
      <StyledSendButton variant={variant} onClick={handleClick}>
        <StyledIcon className={isSending || isSent ? "sending" : ""}>
          {isSent ? <AiOutlineCheck /> : <MdSend />}
        </StyledIcon>
        <StyledText className={isSending || isSent ? "sending" : ""}>
          {isSending ? "Sending..." : isSent ? "Sent" : children}
        </StyledText>
      </StyledSendButton>
    </>
  );
};
export default SendButton;
