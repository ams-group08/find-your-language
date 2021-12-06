import React, { Component } from 'react'
import { Chart } from "react-google-charts";


export class LineChart extends Component {
  render() {
    return (
      <div>
        <Chart
          width={Window.innerWidth}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['x', "C#", "Python", "C", "Ruby"],
            [0, 0, 0, 0, 0],
            [1, 10, 5, 6, 0],
            [2, 23, 15, 22, 1],
            [3, 17, 9, 49, 2],
            [4, 18, 10, 15, 4],
            [5, 9, 5, 55, 30],
            [6, 11, 3, 29, 25],
            [7, 27, 19, 4, 20],
          ]}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Popularity',
            },
            series: {
              1: { curveType: 'function' },
              2: { curveType: 'function' },
              3: { curveType: 'function' },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}

export default LineChart
