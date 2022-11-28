import React from "react";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
class PieChart extends React.Component {
  state = {
    pie: {
      labels: ["France", "Italy", "Japan", "Canada"],
      datasets: [
        {
          data: [25, 28, 20, 25],
          backgroundColor: ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"],
        },
      ],
    },
  };
  render() {
    return (
     
      <MDBContainer style={{ width: "72%" ,height:"250px"}}>
        <div
        style={{
          width: "300px",
          height: "300px",
          float: "left",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "40px",
            position: "absolute",
            top: "50%",
            left: "0",
            marginTop: "-33px",
            lineHeight: "19px",
            textAlign: "center",
            zIndex: 999999999999999,
          }}
        >
          230,900
          <br />
          Sales
        </div>
      
       <Doughnut
          style={{ transform: "scale(.9)" }}
          data={this.state.pie}
         
          options={{
            
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  boxHeight: 7,
                },
              },
            },
          }}
        />
      </div>
      
      </MDBContainer>
      
    );
  }
}
export default PieChart;
