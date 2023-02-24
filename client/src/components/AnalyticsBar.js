import React from "react";

import CanvasJSReact from "../canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import { ResponsiveBarCanvas } from '@nivo/bar'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
               
                ]);

const AnalyticsBar = ({avgMsgPerDay,avgMsgPerMonth,allMessagesMonths}) => {
  const options = {
    legend:{
      display:"false"
    },
    axisY:{
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      labelFormatter: function(){
        return " ";
      }
    },
    axisX:{
      interval: 1
   },
    dataPointWidth: 12,
    colorSet: "greenShades",
    data: [
      {
        type: "bar",
        dataPoints: [
          { label: "December", y: allMessagesMonths[11] },
          { label: "November", y: allMessagesMonths[10] },
          { label: "October", y: allMessagesMonths[9] },
          { label: "September", y: allMessagesMonths[8] },
          { label: "August", y: allMessagesMonths[7] },
          { label: "July", y: allMessagesMonths[6] },
          { label: "June", y: allMessagesMonths[5] },
          { label: "May", y: allMessagesMonths[4] },
          { label: "April", y: allMessagesMonths[3] },
          { label: "March", y: allMessagesMonths[2] },
          { label: "Feburary", y: allMessagesMonths[1] },
          { label: "January", y: allMessagesMonths[0]},
        ],
      },
    ],
  };
  return (
    <>
      <div className="analytics">
        <div className="average">
          <h1 style={{
            fontWeight:"bold"
          }}>{avgMsgPerDay}</h1>
          <p>Average Message Per Day</p>
          <h1 style={{
            fontWeight:"bold"
          }}>{avgMsgPerMonth}</h1>
          <p>Average Message Per Month</p>
        </div>
        <div className="barGraph">
          <CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
          <div className="hide"></div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsBar;
