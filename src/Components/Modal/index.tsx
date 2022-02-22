import React, { useState } from "react";

import {
  ModalContainer,
  ModalCloseButton,
  ModalCloseButtonText,
  ModalForm,
  ModalFormLabel,
  ModalFormText,
  ModalFormInput,
  ModalFormButton,
} from "./styles";

import { useGeneral } from "Hooks/general";

interface ModalProps {
  closeModal: any;
}

const Modal: React.FC<ModalProps> = (props: any) => {
  const { makeAuthentication } = useGeneral();

  const [password, setPassword] = useState("");

  async function handleLogin(password: string) {
    console.log(password)
    await makeAuthentication(password);
  }

  return (
    <ModalContainer>
      <ModalCloseButton onClick={() => props.closeModal()}>
        <ModalCloseButtonText className="material-icons-outlined">
          close
        </ModalCloseButtonText>
      </ModalCloseButton>

      <ModalForm>
        <ModalFormLabel>
          <ModalFormText>Insira a senha</ModalFormText>
          <ModalFormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></ModalFormInput>
        </ModalFormLabel>
        <ModalFormButton onClick={() => handleLogin(password)}>
          Enviar
        </ModalFormButton>
      </ModalForm>
    </ModalContainer>
  );
};

export default Modal;
