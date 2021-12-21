import React, { Component } from 'react'
import { Chart } from "react-google-charts";


export class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    }
  }


  //TODO - chnage formate 
  //https://developers.google.com/chart/interactive/docs/datesandtimes

  componentDidMount() {
    fetch(
      'http://localhost:3003/readfromcsv'
    ).then((res) => res.json()).then((res) => {
      var filtered = [];
      var index = 0
      res.result.forEach(element => {
        if(index !== 0){
          filtered.push(element.map((y, i) => {
            if (i === 0) {
              const d = y.toString().split('.')
              return new Date(d[0], d[1])
            }
            return parseInt(y);
          }))
        }else{

          element[0] = { type: 'date', label: 'Day' }
          filtered.push(element)
        }
        
        index++
      })
      this.setState({
        chartData: filtered
      })
    })
  }

  render() {
    return (
      <div>
        <Chart
          width={Window.width}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={this.state.chartData}
          options={{
            hAxis: {
              title: 'Year',
              format: 'yyyy',
              formatType: 'short'
            },
            vAxis: {
              title: 'Popularity',
            },
            explorer: {axis: 'horizontal',
            keepInBounds: true
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
