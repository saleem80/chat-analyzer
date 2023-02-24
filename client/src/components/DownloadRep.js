import React, { useEffect } from "react";
// import AnalysedContainer from "./AnalysedContainer";
import { useNavigate } from "react-router-dom";
import MakePdf from "./MakePdf";
const DownloadRep = ({data,generatePdfDocument,check,getImage}) => {
  //Required package
  const navigate = useNavigate();
  useEffect(()=>{
    if(check==true)
    {
      var preview=document.querySelector('.preview');
      var d1=document.getElementById('d1');
      var d2=document.getElementById('d2');
      preview.style.display='';
      d1.style.display='none';
      d2.style.display='';
    }
  })
  

  return (
    <>
      <div className="downloadRep">
        <h2
          style={{
            fontWeight: "bold",
          }}
        >
          Get Your Whatsapp Chat Report <br /> with Best Cheapest Cost{" "}
        </h2>
        <button className="download" id="d1" onClick={()=>{navigate('/form',{ state: data })}}>Download</button>
        <button className="download" id="d2" style={{display:'none'}} onClick={getImage} >Download Report</button>
        <button className="preview" 
        style={{display:'none'}}
         onClick={generatePdfDocument}>Download Chats</button>

      </div>
    </>
  );
}
 
export default DownloadRep;