import React from "react";

import { Container, Image } from "./styles";

interface PhotoProps {
  groupNumber: string;
  photo: any;
}

const PhotoComponent: React.FC<PhotoProps> = (props: any) => {
  return (
    <>
      <Container key={props.groupNumber}>
        <Image src={props.photo} />
      </Container>
    </>
  );
};

export default PhotoComponent;
