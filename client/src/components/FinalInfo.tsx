import { FC } from "react";
import { TotalInfoBox } from "./styles";

interface FinalInfoProps {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  fourthLine: string;
}

const FinalInfo: FC<FinalInfoProps> = ({
  firstLine,
  secondLine,
  thirdLine,
  fourthLine,
}) => {
  return (
    <TotalInfoBox>
      <div>{firstLine}</div>
      <div>{secondLine}</div>
      <div>{thirdLine}</div>
      <div>{fourthLine}</div>
    </TotalInfoBox>
  );
};

export default FinalInfo;
