import React from "react";

import Header from "Components/General/Header";
import Main from "Components/ChooseEditGroup";
import Footer from "Components/General/Footer";

import { ToastContainer } from "react-toastify";

const AppIndex: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default AppIndex;
