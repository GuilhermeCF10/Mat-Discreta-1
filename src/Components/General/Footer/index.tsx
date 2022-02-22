import {
  MainContainer,
  Content,
  LogoContainer,
  Logo,
  Items,
  Buttons,
  ButtonsText,
  CopyrightDiv,
  CopyrightSpan,
  CopyrightBold,
} from "./styles";

// const LogoImage = require("assets/ancelotus.png");

const Footer: React.FC = ({ navigation }: any, props: any) => {
  return (
    <MainContainer>
      <Content>
        {/* <LogoContainer>
        <Logo src={LogoImage}></Logo>
      </LogoContainer> */}

        <Items>
          <Buttons>
            <ButtonsText>Matemática Discreta I</ButtonsText>
          </Buttons>
          <Buttons>
            <ButtonsText>IPRJ</ButtonsText>
          </Buttons>
          <Buttons>
            <ButtonsText>UERJ</ButtonsText>
          </Buttons>
        </Items>

        <CopyrightDiv>
          <CopyrightBold>João Miguel Truong Dinh Tien</CopyrightBold>
        </CopyrightDiv>

        <CopyrightDiv>
          <CopyrightSpan>
            © Copyright 2022. All Rights Reserved | Design By
            <CopyrightBold> Group 6</CopyrightBold>
          </CopyrightSpan>
        </CopyrightDiv>
      </Content>
    </MainContainer>
  );
};

export default Footer;
