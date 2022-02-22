import React from "react";

import { Container, Title, Content } from "./styles";

interface InfoProps {
  groupNumber: string;
  title: string;
  content: string;
}

const InfoComponent: React.FC<InfoProps> = (props: any) => {
  return (
    <>
      <Container key={props.groupNumber}>
        <Title>{props.title}</Title>

        <Content>{props.content}</Content>
      </Container>
    </>
  );
};

export default InfoComponent;
