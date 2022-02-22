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
            <ButtonsText>Sobre Nós</ButtonsText>
          </Buttons>
          <Buttons>
            <ButtonsText>Política de Privacidade</ButtonsText>
          </Buttons>
          <Buttons>
            <ButtonsText>Termos de Uso</ButtonsText>
          </Buttons>
          <Buttons>
            <ButtonsText>Contato</ButtonsText>
          </Buttons>
        </Items>

        <CopyrightDiv>
          <CopyrightSpan>
            © 2022 Tien. All Rights Reserved | Design By
            <CopyrightBold> Group 6</CopyrightBold>
          </CopyrightSpan>
        </CopyrightDiv>
      </Content>
    </MainContainer>
  );
};

export default Footer;
