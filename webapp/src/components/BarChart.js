import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export class BarChart extends Component {
    render() {
        return (
            <div>
                <Chart
                    width={Window.innerWidth}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Language', '2021', '2020'],
                        ['C#', 40, 30],
                        ['C', 20, 20],
                        ['Python', 10, 7.5],
                        ['Javascript', 5, 7.5],
                        ['Ruby', 2, 15],
                    ]}
                    options={{
                        title: 'Popularity of Languages',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Total',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Language',
                        }, animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500,
                        }
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}

export default BarChart
