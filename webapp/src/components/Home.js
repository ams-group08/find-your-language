import React, { Component } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'

export class Home extends Component {
    render() {
        return (
            <div>
                <LineChart></LineChart>
                <BarChart></BarChart>
            </div>
        )
    }
}

export default Home
