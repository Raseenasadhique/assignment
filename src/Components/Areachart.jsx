import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import Chart from 'chart.js/auto';

class Areachart extends React.Component {
  state = {
    dataLine: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(181, 179, 251,1)");
            gradient.addColorStop(1, "rgba(181, 179, 251,0)");
            return gradient;
          },
          label: "Products sold",
          fill: true,
          tension: 0.4,
          borderColor: "#B5B3FB",
          pointBackgroundColor: "rgb(255,255,255)",
          pointHoverBackgroundColor: "rgb(255,255,255)",
          pointBorderColor: "#B5B3FB",
          pointRadius: 4,
          pointHoverRadius: 4,
          data: [15, 10, 15, 18, 15, 24],
        },
        {
          label: "Total views",
          fill: true,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 10, 0, 200);
            gradient.addColorStop(0, "rgba(176, 234, 255, 1)");
            gradient.addColorStop(1, "rgba(176, 234, 255, 0)");
            return gradient;
          },
          borderColor: "#B0EAFF",
          tension: 0.4,
          pointBackgroundColor: "rgb(255,255,255)",
          pointHoverBackgroundColor: "rgb(255,255,255)",
          pointBorderColor: "#B0EAFF",
          pointRadius: 4,
          pointHoverRadius: 4,
          data: [18, 7, 17, 12, 17, 10],
        },
      ],
    },
  };
  render() {
    return (
      <MDBContainer
        style={{ width: "78%", height: "70%", transform: "scale(1.25)" }}
      >
        <Line
          data={this.state.dataLine}
          options={{
            maintainAspectRatio: false,
            // responsive: true,
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return "$" + value + "K";
                  },
                },
                min: 5,
                max: 25,
                stepSize: 5,
              },
              x: {},
            },
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  boxHeight: 6,
                },
              },
            },
          }}
        />
      </MDBContainer>
    );
  }
}
export default Areachart;



// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   // ScriptableContext,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );
// const Areachart = () => {
//   const options = {
//     //    innerHeight:"100px",
//     //    innerWidth:"150px",
//     scales: {
//       y: {
//         ticks: {
//           callback: function (value) {
//             return "$" + value + "K";
//           },
//         },
//         min: 5,
//         max: 25,
//         stepSize: 5,
//       },
//       x: {},
//     },

//     responsive: true,
//     tension: 0.4,
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           usePointStyle: true,
//         },
//       },
//       title: {
//         display: true,
//         text: "Statistics",
//       },
//     },
//   };

//   const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Product Sold ",
//         data: [15, 10, 15, 18, 15, 23],
//         fill: "start",
//         pointStyle: "circle",
//         pointRadius: 5,
//         backgroundColor: "rgba(181, 179, 251,1)",
        
//         pointBackgroundColor: "#ffff",

//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 200);
//           gradient.addColorStop(0, "rgba(181, 179, 251,1)");
//           gradient.addColorStop(1, "rgba(181, 179, 251,0)");
//           return gradient;
//         },
//         borderColor: "rgba(181, 179, 251,1)",
//         // borderColor: "#B5B3FB",
//         // backgroundColor: "#B5B3FB",
//         // fill: {
//         //   target: "origin",
//         // },
//       },
//       {
//         label: "Total views",
//         data: [19, 7, 18, 12, 17, 10],
//         // fill: "start",
//         pointStyle: "circle",
//         pointRadius: 5,
//         // pointBorderColor: 'rgba(176, 234, 255, 0)',
//         pointBackgroundColor: "#ffff",
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 10, 0, 200);
//           gradient.addColorStop(0, "rgba(176, 234, 255, 1)");
//           gradient.addColorStop(1, "rgba(176, 234, 255, 0)");
//           return gradient;
//         },
//         borderColor: "rgba(176, 234, 255, 1)",
//         // backgroundColor: "#80E2FF",
//         // fill: "origin",
//       },
//     ],
//   };
//   return (
//     <div style={{ width: 360.6, height: 450 }}>
//       {/* Statistics */}
//       <div id="temp-chart">
//         <Line id="chart" options={options} data={data} />
//       </div>
//     </div>
//   );
// };

// export default Areachart;