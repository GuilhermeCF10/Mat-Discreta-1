import React from "react";

import { Container } from "./styles";

import InfoComponent from "./Info";
import PhotoComponent from "./Photo";

interface GroupProps {
  groupNumber: string;
  title: string;
  content: string;
  photo: string;
  link: string;
}

const GroupComponent: React.FC<GroupProps> = (props) => {
  return (
    <>
      <Container href={props.link}>
        <PhotoComponent groupNumber={props.groupNumber} photo={props.photo} />
        <InfoComponent
          groupNumber={props.groupNumber}
          title={props.title}
          content={props.content}
        />
      </Container>
    </>
  );
};

export default GroupComponent;
