import React from 'react'
import {Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';



function Charts(props) {
  return (
    <div className="chart" style={{width: '100%', height: '20%'}}>
      <Line
        data={props.chartData}
        
      />
    </div>
  )
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: 'bottom'
}

export default Charts
