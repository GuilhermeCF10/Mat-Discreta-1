import React from "react";

import Header from "Components/General/Header";
import Main from "Components/SeeCurrentGroup";
import Footer from "Components/General/Footer";

interface Props {
  group?: any;
}

const AppIndex: React.FC<Props> = (props: any) => {
  return (
    <>
      <Header />
      <Main group={props.group} />
      <Footer />
    </>
  );
};

export default AppIndex;
