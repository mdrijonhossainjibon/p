import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Depoibody from "components/Depoibody";
import Footer from "components/Footer";
import Header from "components/Header";

const FramePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <Depoibody className="bg-gray-900 flex flex-col items-center justify-start mt-1 pt-7 sm:px-5 px-7 w-full" />
          <Footer className="bg-gray-900 flex items-center justify-center mt-1 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default FramePage;
