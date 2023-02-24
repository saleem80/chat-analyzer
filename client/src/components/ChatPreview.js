import React from "react";
const ChatPreview = ({data,authors}) => {
  return (
    <>
    <div className="container" style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100%"

    }}>
      <div className="chatPrev">
        <div
          className="heading"
          style={{
            background: "#008080",
            textAlign: "center",
          }}
        >
          <h5 style={{ color: "white",
        textAlign:"left",
        padding:"20px",
        fontWeight:"bold"
         }}>Chat Preview</h5>
        </div>
        <div className="chats">
          {
            data.map(element=>{
              const date=new Date(element.date);
              if(element.author === 'System')
              return(
                <div className="System">
            <h5 style={{ fontWeight: "bold", color: "#3CB371" }}>{element.author}</h5>{" "}
            <p
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
             {element.message}
            </p>
          </div>
              );
              if(element.author === authors[0])
              return(
                <div className="User">
            <h5 style={{ fontWeight: "bold", color: "#3CB371" }}>{element.author}</h5>{" "}
            <p
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
             {element.message}
            </p>
            <h6
              style={{
                textAlign: "right",
              }}
            >
              {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}
            </h6>
          </div>
              );
              else
              return(
                <div className="Sender">
            <h5 style={{ fontWeight: "bold", color: "#3CB371" }}>{element.author}</h5>{" "}
            <p
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              {element.message}
            </p>
            <h6
              style={{
                textAlign: "right",
              }}
            >
              {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} {(date.getHours())}:{date.getMinutes()}
            </h6>
          </div>
              );
            })
          }
          
          
          
        </div>
      </div>
      </div>
    </>
  );
};

export default ChatPreview;
