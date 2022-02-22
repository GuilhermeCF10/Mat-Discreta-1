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
  justify-content: space-between;
  background-color: ${globalStyles.backgroundColor};
  font-family: ${globalStyles.fontFamily.one};
`;
// **********************************************************************************

// Logo
export const LogoContainer = styled.div`
  width: 20%;
  height: 100%;
`;

export const Logo = styled.span`
  color: ${globalStyles.paletteColors.white};

  font-size: 22px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// **********************************************************************************

// Nav
export const Items = styled.nav`
  display: flex;
  height: 100%;
`;

export const ButtonsText = styled.span`
  color: ${globalStyles.paletteColors.darkLightWhite};
  font-family: ${globalStyles.fontFamily.one};
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

export const Links = styled.a`
  background-color: transparent;
  min-width: 10%;
  height: 100%;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

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
