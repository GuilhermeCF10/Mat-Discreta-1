import React from "react";

import { Container } from "./styles";

import GroupComponent from "./Group";

interface Props {
  group?: any;
}

const MainApp: React.FC<Props> = (props: any) => {
  return (
    <>
      <Container>
        <GroupComponent
          key={props.group.groupNumber}
          groupNumber={props.group.groupNumber}
          title={props.group.name}
          content={props.group.content}
          photo={props.group.photo}
        />
      </Container>
    </>
  );
};

export default MainApp;
