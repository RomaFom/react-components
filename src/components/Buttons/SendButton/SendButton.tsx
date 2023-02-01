import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

const iconAnimation = keyframes`
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
`;

const textAnimation = keyframes`
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
`;

const Button = styled.button<{
  variant?: "primary" | "error" | "info";
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

const Icon = styled.span`
  font-size: 30px;
  display: flex;
  &.sending {
    animation: ${iconAnimation} 5s both;
  }
`;

const Text = styled.span`
  position: absolute;
  left: 64px;
  display: block;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 600;
  &.sending {
    animation: ${textAnimation} 5s both;
  }
`;

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "error" | "info";
};
const SendButton: React.FC<Props> = ({ children, variant }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };
  return (
    <>
      <Button variant={variant} onClick={handleClick}>
        <Icon className={isSending || isSent ? "sending" : ""}>
          {isSent ? <AiOutlineCheck /> : <MdSend />}
        </Icon>
        <Text className={isSending || isSent ? "sending" : ""}>
          {isSending ? "Sending..." : isSent ? "Sent" : children}
        </Text>
      </Button>
    </>
  );
};
export default SendButton;
