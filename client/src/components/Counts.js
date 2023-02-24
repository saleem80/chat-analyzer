import React from "react";
const Counts = ({messages,links,pictures,numEmojis}) => {
    return ( <>
    <div class="container" style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"40px",
        marginBottom:"40px"
    }}>
  <div style={{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      alignItems:"center",
        justifyContent:"center"
    //   flexDirection:"column"
  }}>
    <div className="counts">
      <h1 style={{
          color:"rgb(22, 129, 108)",
          fontWeight:"bold"
      }}>{messages}</h1>
      <h6>Messages</h6>
    </div>
    <div className="counts">
      <h1 style={{
          color:"rgb(22, 129, 108)",
          fontWeight:"bold"
      }}>{pictures}</h1>
      <h6>Media</h6>
    </div>
    {/* <div className="counts">
      <h1 style={{
          color:"rgb(22, 129, 108)",
          fontWeight:"bold"
      }}>20</h1>
      <h6>Audio</h6>
    </div> */}
    <div className="counts">
      <h1 style={{
          color:"rgb(22, 129, 108)",
          fontWeight:"bold"
      }}>{numEmojis}</h1>
      <h6>Emojis</h6>
    </div>
    <div className="counts">
      <h1 style={{
          color:"rgb(22, 129, 108)",
          fontWeight:"bold"
      }}>{links}</h1>
      <h6>Links</h6>
    </div>
  </div>
</div>
    </> );
}
 
export default Counts;