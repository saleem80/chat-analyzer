import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


// import ReactPDF from '@react-pdf/renderer';
// import MakePdf from "./MakePdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";

const onChange = title => (...args) => console.log(title, args);


const TopDownload = ({name,data,check}) => {

  useEffect(()=>{
    if(check==true){
      const d3=document.getElementById('d3');
      d3.style.display='none';
    }
  })
  var today = new Date(),
            date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  const navigate = useNavigate();
  return (
    <>
      <div className="topD">
        <div className="left">
          <div className="icon"></div>
          <div className="details">
            <h4>Whatsapp Chat with {name}.txt</h4>
            <p>{date}</p>
          </div>
        </div>
        <div className="cent">
          {/* <DatePicker 
          className="date"
          onChange={onChange("DatePicker")}
          placeholderText="Starting Date"
          />
          <DatePicker
          className="date"
            placeholderText="Ending Date"
          /> */}
        </div>
        
        <div className="right">
          <button className="download" id="d3" onClick={()=>{ navigate('/form',{ state: data });}}>Download</button>
        </div>
      </div>
    </>
  );
};

export default TopDownload;
