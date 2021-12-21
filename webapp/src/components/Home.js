import React, { Component } from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'

export class Home extends Component {
    render() {
        return (
            <div className='container center'>
                <LineChart></LineChart>
                <PieChart></PieChart>
            </div>
        )
    }
}

export default Home
