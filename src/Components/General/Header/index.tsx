import { useState } from "react";

import {
  MainContainer,
  LogoContainer,
  Logo,
  Items,
  Buttons,
  ButtonsText,
  Links,
} from "./styles";

import { useGeneral } from "Hooks/general";

import Modal from "react-modal";

import ModalComponent from "Components/Modal";

const Header: React.FC = ({ navigation }: any, props: any) => {
  const { modalStatus, setModalStatus, authenticated } = useGeneral();

  console.log("auth ", authenticated);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function handleModal() {
    setModalStatus(!modalStatus);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <MainContainer>
      <LogoContainer>
        <Logo>Matemática Discreta I</Logo>
      </LogoContainer>
      <Items>
        <Links href="/">
          <ButtonsText>Trabalhos</ButtonsText>
        </Links>
        {authenticated ? (
          <Links href="/edit">
            <ButtonsText>Editar</ButtonsText>
          </Links>
        ) : (
          <></>
        )}

        <Buttons onClick={() => handleModal()}>
          <ButtonsText>Login</ButtonsText>
        </Buttons>
      </Items>

      <Modal
        isOpen={modalStatus}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
      >
        <ModalComponent closeModal={closeModal} />
      </Modal>
    </MainContainer>
  );
};

export default Header;
