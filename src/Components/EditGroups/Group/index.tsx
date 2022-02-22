import React from "react";

import { Container } from "./styles";

import InfoComponent from "./Info";
import PhotoComponent from "./Photo";

interface GroupProps {
  groupNumber: string;
  title: string;
  content: string;
  photo: string;
}

const GroupComponent: React.FC<GroupProps> = (props) => {
  return (
    <>
      <Container>
        <PhotoComponent groupNumber={props.groupNumber} photo={props.photo} />
        <InfoComponent groupNumber={props.groupNumber} title={props.title} content={props.content} />
      </Container>
    </>
  );
};

export default GroupComponent;
