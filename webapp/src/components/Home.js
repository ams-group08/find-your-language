import React, { Component } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import Trends from './Trends'

export class Home extends Component {
    render() {
        return (
            <div>
                <LineChart></LineChart>
                <BarChart/>
                <Trends></Trends>
            </div>
        )
    }
}

export default Home
