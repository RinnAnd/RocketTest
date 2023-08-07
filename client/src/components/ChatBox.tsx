import { FC, useState, useEffect, useRef } from "react";
import { ClientInfo } from "../types";
import { gql, useMutation } from "@apollo/client";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  IntroBox,
  LastMessage,
  MessageBox,
  PictureImg,
  SaveUserButton,
  StartButton,
} from "./styles";
import picture from "../assets/pp.jpg";
import NameInput from "./NameInput";
import DateInput from "./DateInput";
import ContactInput from "./ContactInput";
import InfoMessage from "./InfoMessage";
import FinalInfo from "./FinalInfo";

const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      name
      middle_name
      last_name
      second_last_name
      birth_date
      email
      phone
    }
  }
`;

const ChatBox: FC = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [dateinput, setDateinput] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [lastMessage, setLastMessage] = useState(false);
  const [showTotalInfo, setShowTotalInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [upload, setUpload] = useState(false);

  const [info, setInfo] = useState<ClientInfo>({
    name: "",
    middle_name: "",
    last_name: "",
    second_last_name: "",
    birth_date: new Date().toLocaleDateString("en-GB"),
    email: "",
    phone: "",
  });

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTo(0, boxRef.current.scrollHeight);
    }
  }, [
    first,
    second,
    third,
    dateinput,
    contactInfo,
    lastMessage,
    showTotalInfo,
  ]);

  const notify = () =>
    toast.success("Usuario guardado exitosamente", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [createUser, createUserResult] = useMutation(CREATE_USER);

  function showResult(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => setFirst(true), 1000);
    setTimeout(() => setDateinput(true), 3000);
  }

  function showResult2(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => setSecond(true), 1000);
    setTimeout(() => setContactInfo(true), 3000);
  }

  function showResult3(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => setThird(true), 1000);
    setTimeout(() => setLastMessage(true), 3000);
  }

  const updateBirthDate = (
    dayValue: string,
    monthValue: string,
    yearValue: string
  ) => {
    const dayNumber = parseInt(dayValue, 10);
    const monthNumber = parseInt(monthValue, 10);
    const yearNumber = parseInt(yearValue, 10);

    if (!isNaN(dayNumber) && !isNaN(monthNumber) && !isNaN(yearNumber)) {
      const updatedBirthDate = new Date(yearNumber, monthNumber - 1, dayNumber);
      setInfo((prevInfo) => ({
        ...prevInfo,
        birth_date: updatedBirthDate.toLocaleDateString("en-GB"),
      }));
    }
  };

  function formatDate() {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return `${info.birth_date.slice(0, 2)} - ${
      months[Number(info.birth_date.slice(3, 5)) - 1]
    } - ${info.birth_date.slice(6, 10)}`;
  }

  function showInfo() {
    setShowTotalInfo(true);
    const clientInfoJSON = JSON.stringify(info);
    sessionStorage.setItem("clientInfo", clientInfoJSON);
    setSubmitted(true);
    setTimeout(
      () =>
        alert(
          "Le prueba ha terminado. Puedes usar el botón azul para guardar tu información en la nube"
        ),
      2000
    );
  }

  return (
    <>
      <Box ref={boxRef}>
        <IntroBox>
          <h3>Bienvenido al formulario en chat</h3>
          <div>
            <p>Tomará menos de 5 minutos llenarlo con tu información.</p>
            <p style={{ fontSize: "0.7rem" }}>
              Los campos marcados con un '*' son obligatorios.
            </p>
            <p style={{ fontSize: "0.7rem" }}>
              Si ingresas un formato incorrecto el campo se pondrá rojo y no
              podrás avanzar.
            </p>
          </div>
        </IntroBox>
        <MessageBox>
          <PictureImg src={picture} />
          <NameInput onChange={setInfo} info={info} showResult={showResult} />
        </MessageBox>
        {first ? (
          <InfoMessage
            text={`${info.name} ${info.middle_name} ${info.last_name} ${info.second_last_name}`}
          />
        ) : (
          <></>
        )}
        {dateinput ? (
          <MessageBox>
            <PictureImg src={picture} />
            <DateInput
              updateBirthDate={updateBirthDate}
              showResult2={showResult2}
            />
          </MessageBox>
        ) : (
          <></>
        )}
        {second ? <InfoMessage text={formatDate()} /> : <></>}
        {contactInfo ? (
          <MessageBox>
            <PictureImg src={picture} />
            <ContactInput
              onChange={setInfo}
              info={info}
              showResult3={showResult3}
            />
          </MessageBox>
        ) : (
          <></>
        )}
        {third ? (
          <InfoMessage
            text={`Correo electrónico: ${info.email} Teléfono celular: ${info.phone}`}
          />
        ) : (
          <></>
        )}
        {lastMessage ? (
          <>
            <LastMessage>
              Si tus datos son correctos por favor continuemos
            </LastMessage>
            <StartButton onClick={() => showInfo()} disabled={submitted}>
              Iniciar
            </StartButton>
          </>
        ) : (
          <></>
        )}
        {showTotalInfo ? (
          <FinalInfo
            firstLine={`Fecha de nacimiento: ${formatDate()}`}
            secondLine={`Correo electrónico: ${info.email}`}
            thirdLine={`Teléfono celular: ${info.phone}`}
            fourthLine={`Nombre: ${info.name} ${info.middle_name} ${info.last_name} ${info.second_last_name}`}
          />
        ) : (
          <></>
        )}
      </Box>
      <SaveUserButton
        onClick={(e) => {
          e.preventDefault();
          createUser({ variables: { input: info } });
          setUpload(true);
          notify();
        }}
        disabled={createUserResult.loading || !submitted || upload}
      >
        <BsFillCloudArrowUpFill size={30} />
      </SaveUserButton>
      <ToastContainer />
    </>
  );
};

export default ChatBox;
