import { styled } from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  background-color: #0e1d39;
  align-items: center;
  justify-content: space-around;
  display: flex;
  color: #fff;
  height: 5rem;
  position: relative;
  z-index: 2;
`;

export const Box = styled.div`
  position: absolute;
  bottom: 9rem;
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  background-color: var(--main);
  height: 38rem;
  max-height: 38rem;
  flex-grow: 1;
  width: 28rem;
  gap: 1.5rem;
  border-radius: 10px;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 9px 7px 14px -10px rgba(0, 0, 0, 0.9);
`;

export const IntroBox = styled.div`
  width: 93%;
  background-color: var(--secondary);
  min-height: 8rem;
  padding: 1rem;
`;

export const MessageBox = styled.div`
  margin-left: 1rem;
  display: flex;
  gap: 10px;
`;

export const PictureImg = styled.img`
  width: 3rem;
  border-radius: 40%;
  border: solid 2px var(--secondary);
  height: 3.5rem;
`;

export const InfoBox = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  background-color: var(--shade);
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
`;

export const DataInput = styled.input<{ $border: string | null }>`
  height: 2.5rem;
  margin: 0.2rem;
  background-color: transparent;
  border: solid 1px ${(props) => props.$border || "#DBDBDB"};
  width: 12rem;
  padding: 0 8px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const Message = styled.div`
  background-color: var(--secondary);
  min-height: 2.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  min-width: 50%;
  max-width: 70%;
  justify-content: center;
  font-size: 0.8rem;
  text-align: left;
`;

export const LastMessage = styled.div`
  background-color: var(--shade);
  min-height: 2.5rem;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  max-width: 70%;
  justify-content: center;
  font-size: 0.8rem;
  text-align: left;
`;

export const StartButton = styled.button`
  background-color: var(--cta);
  color: #ffff;
  min-height: 2rem;
  border: none;
  border-radius: 5px;
  width: 70%;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const TotalInfoBox = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  text-align: start;
  padding: 0.8rem;
  max-width: 80%;
  justify-content: center;
  font-size: 0.8rem;
`;

export const SaveUserButton = styled.button`
  background-color: #1b3971;
  height: 3rem;
  width: 3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  transform: translate(12.5rem, 4rem);
  &:disabled {
    background-color: gray;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
