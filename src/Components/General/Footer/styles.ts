import styled from "styled-components";

import { globalStyles } from "Global/globalStyles";

// MainContainer
export const MainContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${globalStyles.backgroundColor};
`;
// **********************************************************************************

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

// Logo
export const LogoContainer = styled.div`
  height: 100%;
`;

export const Logo = styled.img`
  width: 100px;
  background-color: #ccc;
  border-radius: 10px;
`;
// **********************************************************************************

// Nav
export const Items = styled.nav`
  height: 100%;
`;

export const ButtonsText = styled.span`
  color: ${globalStyles.paletteColors.darkLightWhite};
  font-family: sans-serif;
  font-size: 16px;
`;

export const Buttons = styled.button`
  background-color: transparent;
  min-width: 10%;
  height: 100%;
  margin-right: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const TextOne = styled.span`
  color: #fff;
  font-weight: 500;
`;

export const TextTwo = styled.span`
  color: #ccc;
  font-weight: normal;
`;
// **********************************************************************************

// Copyright
export const CopyrightDiv = styled.div``;

export const CopyrightSpan = styled.span`
  color: #ccc;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 300;
  word-spacing: 1px;
  text-transform: capitalize;
`;

export const CopyrightBold = styled.span`
  color: #fff;
  letter-spacing: 1px;
  font-weight: 400;
  word-spacing: 1px;
  text-transform: capitalize;
`;
// **********************************************************************************
