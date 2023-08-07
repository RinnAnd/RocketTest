import { FC, useState, SetStateAction, useEffect } from "react";
import { DataInput, InfoBox } from "./styles";
import { ClientInfo } from "../types";

interface NameInputProps {
  onChange: React.Dispatch<SetStateAction<ClientInfo>>;
  info: ClientInfo;
  showResult: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NameInput: FC<NameInputProps> = ({ onChange, info, showResult }) => {
  const [submitted, setSubmitted] = useState(false);
  const [validName, setValidName] = useState(true);

  useEffect(() => {
    handleNameInput();
  }, [info]);

  function handleNameInput() {
    if (info.name !== "" && info.last_name !== "") {
      setValidName(false);
    }
  }

  return (
    <>
      <InfoBox>
        <form onSubmit={(e) => showResult(e)}>
          <h3>¿Cuál es tu nombre?</h3>
          <DataInput
            type="text"
            placeholder="Nombre*"
            onChange={(e) => onChange({ ...info, name: e.target.value })}
            disabled={submitted}
            $border={null}
          />
          <DataInput
            type="text"
            placeholder="Segundo nombre"
            onChange={(e) => onChange({ ...info, middle_name: e.target.value })}
            disabled={submitted}
            $border={null}
          />
          <DataInput
            type="text"
            placeholder="Apellido paterno*"
            onChange={(e) => onChange({ ...info, last_name: e.target.value })}
            disabled={submitted}
            $border={null}
          />
          <DataInput
            type="text"
            placeholder="Apellido materno"
            onChange={(e) =>
              onChange({ ...info, second_last_name: e.target.value })
            }
            disabled={submitted}
            $border={null}
          />
          <button
            style={{
              position: "absolute",
              border: "none",
              background: "transparent",
            }}
            onClick={() => setSubmitted(true)}
            disabled={validName}
          ></button>
        </form>
      </InfoBox>
    </>
  );
};

export default NameInput;
