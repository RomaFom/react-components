import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  75%,
  100% {
    translate: 0 88px;
  }
`;

const fill = keyframes`
  0%,
  20% {
    translate: 0 0;
  }
  40%,
  70% {
    translate: 0 -50%;
  }
  90%,
  100% {
    translate: 0 -100%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 0;
  background: #ff2c6c;
  font-size: 22px;
  font-weight: 400;
  color: #f9f9f9;
  padding: 0 0 0 24px;
  width: 210px;
  height: 64px;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  :disabled {
    opacity: 0.8;
  }
  &.deleting :is(.paper, .shredded) {
    animation: ${move} 1.25s linear 2 both;
  }
  &.deleting .filler {
    animation: ${fill} 2.5s both;
  }
`;

const Text = styled.span`
  flex: 0 0 120px;
`;

const Animation = styled.span`
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  scale: 1;
`;

const PaperWrapper = styled.span`
  overflow: hidden;
  position: absolute;
  display: flex;
  top: -20px;
  left: 50%;
  margin-left: -5px;
  width: 10px;
  height: 64px;
`;

const Paper = styled.span`
  width: 10px;
  display: block;
  background: #ffffff;
  height: 20px;
`;

const ShreddedWrapper = styled.span`
  justify-content: center;
  overflow: hidden;
  position: absolute;
  display: flex;
  top: -20px;
  left: 50%;
  margin-left: -5px;
  width: 10px;
  height: 64px;
`;

const Shredded = styled.span`
  margin-top: -40px;
  width: 2px;
  display: block;
  background: #ffffff;
  height: 20px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    width: inherit;
    height: inherit;
    background: inherit;
  }

  ::before {
    left: -4px;
  }

  ::after {
    right: -4px;
  }
`;

const Can = styled.span`
  overflow: hidden;
  position: relative;
  translate: 0 3px;
  width: 17px;
  height: 22px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid #ffffff;
`;

const Lid = styled.span`
  position: absolute;
  top: 18px;
  left: 50%;
  translate: -50% 0;
  width: 24px;
  height: 2px;
  background: #ffffff;
`;

const Filler = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  height: 120%;
  background: #ffffff;
`;

type Props = {
  children: React.ReactNode;
};
const DeleteButton: React.FC<Props> = ({ children }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    // do something async
    setTimeout(() => {
      setIsDeleting(false);
    }, 2500);
  };
  return (
    <>
      <Button
        className={isDeleting ? "deleting" : ""}
        onClick={handleClick}
        disabled={isDeleting}
      >
        <Text>{isDeleting ? "Deleting..." : children}</Text>
        <Animation>
          <PaperWrapper>
            <Paper className={"paper"} />
          </PaperWrapper>
          <ShreddedWrapper>
            <Shredded className={"shredded"} />
          </ShreddedWrapper>
          <Lid />
          <Can>
            <Filler className={"filler"} />
          </Can>
        </Animation>
      </Button>
    </>
  );
};
export default DeleteButton;
