import { FC } from "react";
import { HeaderDiv } from "./styles";
import logo from "../assets/rocket.jpg";

const Header: FC = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <HeaderDiv>
      <img
        src={logo}
        width={300}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
      <h2 style={{ transform: "translate(-2rem, -0.4rem)" }}>Prueba técnica</h2>
    </HeaderDiv>
  );
};

export default Header;
