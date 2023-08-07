import { FC } from "react";
import { Message } from "./styles";

interface InfoMessageProps {
  text: string;
}

const InfoMessage: FC<InfoMessageProps> = ({ text }) => {
  return <Message>{text}</Message>;
};

export default InfoMessage;
