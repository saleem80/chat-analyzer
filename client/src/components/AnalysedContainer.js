import "./styles.css";
// import React from "react";
import React, { createRef, useState, useEffect } from "react";
import Counts from "./Counts";
import Insights from "./Insights";
import UserDetails from "./UserDetails";
import AnalyticsBar from "./AnalyticsBar";
import AnalyticsPie from "./AnalyticsPie";
import ChatPreview from "./ChatPreview";
import DownloadRep from "./DownloadRep";
import TopDownload from "./TopDownload";
import SuccessfulPayment from "./SuccessfulPayment";
import { useNavigate } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { jsPDF } from "jspdf";
// import MakePdf from "./MakePdf";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

import MakePdf from "./MakePdf";
const AnalysedContainer = ({ data }) => {
  var check = false;
  if (data[data.length - 1].date === "true") check = true;
  useEffect(() => {
    // var final = document.getElementById("final");
    // var bottom=document.getElementById('bottom');
    if (data[data.length - 1].message === "success") {
      // final.style.display = "flex";
      data.pop();
    }
  });

  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const download = (image, { name = "img", extension = "jpeg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    console.log(image);
    var imgData = image;
    var doc = new jsPDF("p", "mm");
    var imgWidth = 210;
    var pageHeight = 297;
    var imgHeight =
      (doc.getImageProperties(image).height * imgWidth) /
      doc.getImageProperties(image).width;

    var position = 0;
    var heightLeft = imgHeight; // give some top padding to first page
    doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    console.log(imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      console.log(heightLeft);

      position -= 297;
      // console.log(position)
      // top padding for other pages
      doc.addPage();
      doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.save("Whatsapp Report.pdf");

    // pdf.output('dataurlnewwindow');
    // pdf.save("download.pdf");
    // a.download = createFileName(extension, name);
    // a.click();
  };
  const getImage = () => {
    // var chatPrev = document.querySelector(".chatPrev");
    // var chats = document.querySelector(".chats");
    // chatPrev.style.height = "auto";
    // chats.style.height = "auto";

    takeScreenshot(ref.current)
      .then(download)
      .then(() => {
        console.log(ref.current);
        //   chatPrev.style.height="750px";
        // chats.style.height="660px";
      });
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const emojis = [
    "😂",
    "❤️",
    "🤣",
    "👍",
    "😭",
    "🙏🏻",
    "😘",
    "🥰",
    "😍",
    "😊",
    "🔥",
    "😎",
    "🥺",
    "🤦🏻‍♂️",
    "🤦🏻‍♀️",
  ];
  var numEmojis = 0;
  const authors = [],
    messages = data.length;
  var pictures = 0,
    links = 0;
  const firstMessage = new Date(data[1].date).toString().substr(0, 15);
  const lastMessage = new Date(data[data.length - 2].date)
    .toString()
    .substr(0, 15);

  data.forEach((element) => {
    if (
      element.author !== "System" &&
      authors.includes(element.author) === false
    )
      authors.push(element.author);

    if (element.message === "<Media omitted>") pictures++;

    if (element.message.includes("http")) links++;
    emojis.forEach((emoji) => {
      if (element.message.includes(emoji)) numEmojis++;
    });
  });
  const authLength = authors.length;
  var allMessages = new Array(authLength).fill(0);
  var allMessagesLength = new Array(authLength).fill(0);
  var allWordsPerMessage = new Array(authLength).fill(0);
  var allMessagesMonths = new Array(12).fill(0);
  var allPictures = new Array(authLength).fill(0);
  var allLinks = new Array(authLength).fill(0);
  var allEmojis = new Array(authLength).fill(0);
  data.forEach((element) => {
    var flag = 0;
    authors.forEach((author) => {
      if (element.author === author) {
        allMessages[flag]++;
        allMessagesLength[flag] += element.message.length;
        if (element.message === "<Media omitted>") allPictures[flag]++;
        if (element.message.includes("http")) allLinks[flag]++;
        emojis.forEach((emoji) => {
          if (element.message.includes(emoji)) allEmojis[flag]++;
        });
      }
      flag++;
    });
    flag = 0;
    const date = new Date(element.date);
    const month = date.getMonth();
    allMessagesMonths[month]++;
  });
  var authFlag = 0;
  authors.forEach((author) => {
    allWordsPerMessage[authFlag] = parseInt(
      allMessagesLength[authFlag] / allMessages[authFlag]
    );
    authFlag++;
  });
  const activeMonth =
    months[allMessagesMonths.indexOf(Math.max(...allMessagesMonths))];
  const activeUser = authors[allMessages.indexOf(Math.max(...allMessages))];
  const avgMsg = parseInt(messages / authLength);
  const avgMsgPerDay = parseInt(messages / 365);
  const avgMsgPerMonth = parseInt(messages / 12);
  console.log(
    allPictures,
    authors,
    firstMessage,
    allMessages,
    allMessagesMonths,
    data,
    allWordsPerMessage
  );

  const generatePdfDocument = async () => {
    const blob = await pdf(<MakePdf data={data} authors={authors} />).toBlob();
    saveAs(blob, "Whatsapp Chat.pdf");
  };
  return (
    <>
      <div
        style={{
          width: window.screen.width > 700 ? "70vw" : "100vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "80px",
          boxShadow: "0 0 10px #aaa",
          // height: window.screen.width > 700 ? "61vh" : "",
          backgroundColor: "white",
          borderRadius: "15px",
          border: "8px solid rgb(56 141 110)",
          marginBottom: "50px",
        }}
      >
        {}

        <TopDownload name={authors[0]} data={data} check={check} />
        <div ref={ref}>
          <Counts
            messages={messages}
            links={links}
            pictures={pictures}
            numEmojis={numEmojis}
          />
          <Insights
            firstMessage={firstMessage}
            lastMessage={lastMessage}
            activeMonth={activeMonth}
            activeUser={activeUser}
            authLength={authLength}
            avgMsg={avgMsg}
          />
          <UserDetails
            allMessages={allMessages}
            allWordsPerMessage={allWordsPerMessage}
            allPictures={allPictures}
            allLinks={allLinks}
            authors={authors}
            allEmojis={allEmojis}
          />
          <AnalyticsBar
            avgMsgPerDay={avgMsgPerDay}
            avgMsgPerMonth={avgMsgPerMonth}
            allMessagesMonths={allMessagesMonths}
          />
          <AnalyticsPie
            authors={authors}
            allMessages={allMessages}
            messages={messages}
          />
        </div>
        <ChatPreview data={data} authors={authors} />

        <DownloadRep
          data={data}
          generatePdfDocument={generatePdfDocument}
          check={check}
          getImage={getImage}
        />
        {/* <button
          id="final"
          style={{
            display:'none',
            alignItems: "center",
            justifyContent: "center",
            background: "#128c7f",
            width: "100%",
            height: "40%",
            color: "white",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
          onClick={getImage}
        >
          Download Report Now
        </button> */}
        <div
          style={{
            display: "none",
          }}
        >
          {/* <SuccessfulPayment data={data} 
          // messages={messages}
          // links={links}
          // pictures={pictures}
          // numEmojis={numEmojis}
          getImage={getImage}
          /> */}
        </div>
      </div>
    </>
  );
};

export default AnalysedContainer;
