import React, { Component } from 'react'
import { Chart } from "react-google-charts";


export class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    }
  }


  componentDidMount(){
    fetch(
      'http://localhost:3003/readfromcsv'
    ).then((res) => res.json()).then((res)=> this.setState({
      chartData: res.result
    }));
  }


  render() {
    return (
      <div>
        <Chart
          width={Window.innerWidth}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={this.state.chartData}
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
            }, animation: {
              startup: true,
              easing: 'linear',
              duration: 1500,
            }
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}

export default LineChart
