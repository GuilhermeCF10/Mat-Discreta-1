import styled from "styled-components";

// Modal

export const ModalContainer = styled.div`
  position: relative;
  min-width: 400px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 0%;
  top: 0%;
  background-color: transparent;
  color: #333;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalCloseButtonText = styled.span``;

export const ModalForm = styled.div``;

export const ModalFormLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalFormText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const ModalFormInput = styled.input`
  margin-top: 15px;
  width: 90%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #333;
  outline: none;
  padding: 0px 10px;
`;

export const ModalFormButton = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #00875f;
  color: white;
  font-size: 18px;
  transition: all 0.5s linear;
  cursor: pointer;

  &:hover {
    background-color: #04d361;
  }
`;
