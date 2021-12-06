import React, { Component } from 'react'
import LineChart from './LineChart'

export class Home extends Component {
    render() {
        return (
            <div>
                <LineChart></LineChart>
                <h1 className="text-center" >Languages</h1>
            </div>
        )
    }
}

export default Home
