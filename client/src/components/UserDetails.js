import React from "react";
const UserDetails = ({allMessages,allWordsPerMessage,allPictures,allLinks,authors,allEmojis}) => {
  var flag=0;
    return (
      <>
        <div className="outer" style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            alignItems:"center",
            justifyContent:"center",
            borderBottom:"0.5px grey solid",
           
            paddingBottom:"25px"
        }}>
          {
            
            allMessages.map(message=>{
              return(
              <div className="box" style={{
                border:"1px solid #128c7f",
  
            }}>
              <h4
                style={{
                  textAlign: "center",
                }}
              >
                {authors[flag]}
              </h4>
              <div
                className="line"
                style={{
                  height: "2px",
                  background: "black",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: "translateX(10%)",
                  marginTop:"20px",
                  marginBottom:"20px"
                }}
              ></div>
              <div class="row">
                <div class="col-9">Message Sent</div>
                <div class="col-3" style={{fontWeight:"bold"}}>{allMessages[flag]}</div>
                <div class="col-9">Words Per Message</div>
                <div class="col-3" style={{fontWeight:"bold"}}>{allWordsPerMessage[flag]}</div>
                <div class="col-9">Media Sent</div>
                <div class="col-3" style={{fontWeight:"bold"}}>{allPictures[flag]}</div>
                {/* <div class="col-9">Audio Sent</div>
                <div class="col-3" style={{fontWeight:"bold"}}>232</div> */}
                <div class="col-9">Emoji Sent</div>
                <div class="col-3" style={{fontWeight:"bold"}}>{allEmojis[flag]}</div>
                <div class="col-9">Link Sent</div>
                <div class="col-3" style={{fontWeight:"bold"}}>{allLinks[flag++]}</div>
              </div>
            </div>
              );
            })
          }
          
        </div>
      </>
    );
}
 
export default UserDetails;