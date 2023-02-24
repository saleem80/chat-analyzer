import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#212529",
  },
  syst:{
    display: 'flex',
    flexDirection: 'column',
    // float:'none',
    
    borderRadius:'6px',
    alignSelf: 'center',
    maxWidth: '60%',
    padding: '6px',
    margin: '10px',
    backgroundColor: '#dbee94'
  },
  s1:{
    color:'#2f3b01',
    textAlign:'center',
    fontWeight:'bold',
    paddingBottom:'4px'
  },
  s2:{
    fontSize:'10px'
  },
  user:{
    display:'flex',
    float:'right',
    flexDirection:'column',
    alignSelf:'flex-end',
    maxWidth:'60%',
    backgroundColor:'#008080',
    borderRadius:'6px',
    padding:"6px",
    margin:'10px'
  },
  u1:{
    color:'#3CB371',
    textAlign:'right',
    fontWeight:'bold',
    paddingBottom:'4px'
  },
  u2:{
    textAlign:'right',
    fontSize:'10px',
    color:'white'
  },
  receiver:{
    display:'flex',
    float:'left',
    flexDirection:'column',
    alignSelf:'flex-start',
    maxWidth:'60%',
    borderRadius:'6px',
    padding:"6px",
    margin:'10px',
    backgroundColor:'rgba(41, 63, 57, 0.417)'
  },
  r1:{
    color:'#3CB371',
    textAlign:'left',
    fontWeight:'bold',
    paddingBottom:'4px'
  },
  r2:{
    textAlign:'left',
    fontSize:'10px',
    color:'white',
   
  },
  r3:{
    textAlign:'right',
    paddingTop:'4px',
    alignSelf:'flex-end',
    fontSize:'10px',
    color:'#b3b3b3'
  },
  contain:{
    width:'100%',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  // heading:{
  //   color:'white'
  // }
});
var flag=0;
// Create Document Component
const MakePdf = ({
  data,
  authors
}) => {
  return(
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.contain}>
        {/* <Text style={styles.heading}>Chat Preview</Text> */}
        {
          data.map((element)=>{
            const date=new Date(element.date);
              if(element.author === 'System')
            return(
              <View style={styles.syst}>
              <Text style={styles.s1}>{element.author}</Text>
              <Text style={styles.s2}>{element.message}</Text>
              </View>
            )
            if(element.author === authors[0])
            return(
              <View style={styles.user}>
                <Text style={styles.u1}>{element.author}</Text>
                <Text style={styles.u2}>{element.message}</Text>
                <Text style={styles.r3}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</Text>
              </View>
            )
            else
            return(
              <View style={styles.receiver}>
                <Text style={styles.r1}>{element.author}</Text>
                <Text style={styles.r2}>{element.message}</Text>
                <Text style={styles.r3}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</Text> 
              </View>
            )
          })
        }
      </View>
    </Page>
  </Document>
)
};

export default MakePdf;
