import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

export class PieChart extends Component {
    render() {
        return (
            <div>
                <Chart
                    width={Window.innerWidth}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Language', 'Market share'],
                        ['Javascript', 11],
                        ['typescript', 2],
                        ['go', 2],
                        ['C++', 2],
                        ['python', 7],
                    ]}
                    options={{
                        title: 'Programming Languages',
                        // Just add this option
                        is3D: true,
                        backgroundColor: "#3EABF4"
                    }
                    }
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}

export default PieChart
