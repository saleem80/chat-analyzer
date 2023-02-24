// import React from "react";
import React, { createRef, useState } from 'react'
import Footer from "./Footer";
import NavTop from "./NavTop";
import Image from "../assets/dot-map.png";
import Tick from "../assets/tick.png";
import NavTopMob from "./NavTopMob";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import DownloadRep from "./DownloadRep";
// import MakePdf from "./MakePdf";
// import { pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useScreenshot,createFileName } from 'use-react-screenshot'


// import { PDFDownloadLink } from '@react-pdf/renderer';



// import jsPDF from "jspdf";
const SuccessfulPayment = () => {
  const location=useLocation();
  const navigate = useNavigate();
  var allow=true;
  console.log(location.state);
  var data=location.state;
  data.push({ date: "true", author: "System", message: "success" });
  console.log(data)
//   const save = () => {
//     const check=document.getElementById('check');
//     const doc=new jsPDF('p', 'pt', 'letter');
//     doc.html(check, {
//       callback: function (doc) {
//         doc.save();
//       }
//    });
// } 
// const generatePdfDocument = async () => {
//   const blob = await pdf(
//     <MakePdf
//       data={data}
//       messages={messages}
//       links={links}
//       pictures={pictures}
//       numEmojis={numEmojis}
//     />
//   ).toBlob();
//   saveAs(blob, "filename.pdf");
// };
// const ref = createRef(null)
//   const [image, takeScreenshot] = useScreenshot()
//   const download = (image, { name = "img", extension = "jpg" } = {}) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };
//   const getImage = () => takeScreenshot(ref.current).then(download)
  return (
    <>
      <div
      
        style={{
          background: `url(
            ${Image}
          )`,
          backgroundColor: "rgb(56 141 125)",
          height: window.screen.width > 700 ? "100vh" : "",
        }}
      >

        {window.screen.width > 700 ? <NavTop /> : <NavTopMob />}
        <hr style={{ borderTop: "1px solid white" }} />
        <div
          style={{
            width: window.screen.width > 700 ? "40vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "80px",
            boxShadow: "0 0 10px #aaa",
            height: window.screen.width > 700 ? "61vh" : "",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "8px solid rgb(56 141 110)",
            marginBottom: "50px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            padding: window.screen.width < 700 && "100px",
          }}
        >
          <div>
            <div className="text-center mb-2">
              <img src={Tick} width="50" />
            </div>
            <h5 className="text-success text-center">
              Payment Successfully <br /> Completed
            </h5>
            <div
             
              style={{
                width: window.screen.width > 700 ? "30vw" : "70vw",
                height: "22vh",
                backgroundColor: "#cbe9f3",
                borderRadius: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "25px",
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                padding: "15px",
              }}
            >
              <h5 className="text-center mb-3" style={{ width: "360px" }}>
                Now your Whatsapp Chat Report is ready to download
              </h5>
              <div style={{ display:'none'}}>
  
              </div>
              <button className="btn btn-success" 
              // onClick={generatePdfDocument}
              // onClick={getImage}
              onClick={()=>{navigate("/analysed",{state:data})}}
              >Download Report</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SuccessfulPayment;
