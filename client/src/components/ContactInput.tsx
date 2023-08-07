import { FC, useEffect, useState } from "react";
import { ClientInfo } from "../types";
import { DataInput, InfoBox } from "./styles";

interface ContactInputProps {
  onChange: React.Dispatch<React.SetStateAction<ClientInfo>>;
  info: ClientInfo;
  showResult3: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Errors {
  email: string | null;
  phone: string | null;
}

const ContactInput: FC<ContactInputProps> = ({
  onChange,
  info,
  showResult3,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [validContact, setValidContact] = useState(true);

  const [error, setError] = useState<Errors>({
    email: null,
    phone: null,
  });

  function validatePhoneNumber(phone: string): string | null {
    const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return regex.test(phone) ? null : "red";
  }

  function validateEmail(email: string): string | null {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email) ? null : "red";
  }

  function handleErrors() {
    setError({
      email: info.email !== "" ? validateEmail(info.email) : null,
      phone: info.phone !== "" ? validatePhoneNumber(info.phone) : null,
    });
  }

  function handleContactInfo() {
    setValidContact(!!error.email || !!error.phone)
    if(info.email === "" || info.phone === "") {
      setValidContact(true)
    }
  }

  useEffect(() => {
    handleErrors();
  }, [info.email, info.phone]);

  useEffect(() => {
    handleContactInfo()
  }, [error])

  return (
    <>
      <InfoBox>
        <form onSubmit={(e) => showResult3(e)}>
          <h3>Datos de contacto</h3>
          <DataInput
            type="text"
            placeholder="Correo electrónico*"
            onChange={(e) => onChange({ ...info, email: e.target.value })}
            $border={error.email}
            disabled={submitted}
          />
          <DataInput
            type="text"
            placeholder="Teléfono celular*"
            onChange={(e) => onChange({ ...info, phone: e.target.value })}
            $border={error.phone}
            disabled={submitted}
          />
          <button
            style={{
              position: "absolute",
              border: "none",
              background: "transparent",
            }}
            onClick={() => setSubmitted(true)}
            disabled={validContact}
          ></button>
        </form>
      </InfoBox>
    </>
  );
};

export default ContactInput;
