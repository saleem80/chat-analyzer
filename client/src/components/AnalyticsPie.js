import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import CanvasJSReact from "../canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJS.addColorSet("greenShades", [
  //colorSet Array

  "#12877d",
  "#79d6c9"
]);


const AnalyticsPie = ({authors,allMessages,messages}) => {
  const pies=[];var flag=0;
  authors.map(author=>{
    const val=(allMessages[flag]/messages)*100;
    pies.push({name:author, y:val})
    flag++;
  })
  const options = {
    animationEnabled: true,
    legend:{
      display:"false"
    },
    colorSet: "greenShades",
    // subtitles: [{
    //     text: "71% Positive",
    //     verticalAlign: "center",
    //     fontSize: 24,
    //     dockInsidePlotArea: true
    // }],
    
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: pies,
      },
    ],
  };
  return (
    <div className="pieContainer">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      <div className="hide2"></div>
    </div>
  );
};

export default AnalyticsPie;
