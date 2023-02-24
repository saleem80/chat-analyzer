import React from "react";
import Footer from "./Footer";
import NavTop from "./NavTop";
import NavTopMob from "./NavTopMob";
import { useLocation } from "react-router-dom";
// import Counts from "./Counts";

import AnalysedContainer from "./AnalysedContainer";
import SuccessfulPayment from "./SuccessfulPayment";
// import MakePdf from "./MakePdf";

const ChatAnalysed = () => {
  const location=useLocation();
  return (
    <>
      <div
        style={{
          background: `url(
            ${Image}
          )`,
          backgroundColor: "#128c7f",
          height: window.screen.width > 480 ? "" : "100vh",
        }}
      >
        {window.screen.width > 700 ? <NavTop /> : <NavTopMob />}
        <AnalysedContainer data={location.state} >
        {/* <Counts /> */}
        </AnalysedContainer>
        
        <Footer />
        {/* <div style={{
          display:"none"
        }}>
         <SuccessfulPayment data={location.state} />
        </div> */}
      </div>
    </>
  );
};

export default ChatAnalysed;
