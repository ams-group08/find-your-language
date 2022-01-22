import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import './LineChart.css'


export class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            color:"#fff"
        }
    }


    // TODO - change formate 
    // https://developers.google.com/chart/interactive/docs/datesandtimes

    componentDidMount() {
        fetch(
            this.props.call
        ).then((res) => res.json()).then((res) => {
            var filtered = [];
            var index = 0
            res.results.forEach(element => {
                if (index !== 0) {
                    filtered.push(element.map((y, i) => {
                        if (i === 0) {
                            const d = y.toString().split('.')
                            return new Date(d[0], d[1])
                        }
                        return parseInt(y);
                    }))
                } else {

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
            <div className='border m-2'>
                <Chart className='graph'
                    width={Window.width}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.chartData}
                    options={{
                        lineWidth: 4,
                        hAxis: {
                            title: 'Year',
                            format: 'yyyy',
                            formatType: 'short',
                            textStyle: {
                                color:"#3F7FBF",
                            },
                            titleTextStyle: {
                                color:"#3F7FBF",
                            }, 
                        },
                        vAxis: {
                            title: this.props.vaxistitle,
                            textStyle: {
                                color:"#3F7FBF",
                            },
                            titleTextStyle: {
                                color:"#3F7FBF",
                            },
                        },
                        explorer: {
                            axis: 'horizontal',
                            keepInBounds: true
                        },
                        series: {
                            1: { curveType: 'function' },
                            2: { curveType: 'function' },
                            3: { curveType: 'function' },
                        }, animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500
                        },
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
                        title: 'Programming Languages - ' + this.props.source,
                        titleTextStyle: {
                            color:"#3F7FBF",
                        },
                        legend:{
                            textStyle: {
                                color:"#3F7FBF",
                            },
                        }
                        }
                        
                    }
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}

export default LineChart
