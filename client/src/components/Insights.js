import React from "react";
const Insights = ({firstMessage,lastMessage,activeMonth,activeUser,authLength,avgMsg}) => {
    return (
      <>
        <div class="insights">
          <div class="resp">
            <div class=" infos">
                <h6 style={{color:"black"}}>First Message</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{firstMessage}</h4>
                </div>
            <div class=" infos">
                <h6 style={{color:"black"}}>Last Message</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{lastMessage}</h4>
                </div>
            <div class="w-100"></div>
            <div class=" infos">
                <h6 style={{color:"black"}}>Most Active Month</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{activeMonth}</h4>
                </div>
            <div class=" infos">
                <h6 style={{color:"black"}}>Most Active User</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{activeUser}</h4>
                </div>
            <div class="w-100"></div>
            <div class=" infos">
                <h6 style={{color:"black"}}>Total Participants</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{authLength}</h4>
                </div>
            <div class=" infos">
                <h6 style={{color:"black"}}>AVG Message Per User</h6 >
                <h4 style={{
                     color:"#128C7F"
                }}>{avgMsg}</h4>
                </div>
          </div>
        </div>
      </>
    );
}
 
export default Insights;