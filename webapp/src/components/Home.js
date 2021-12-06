import React, { Component } from 'react'
import LineChart from './LineChart'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center" >Languages Popularity</h1>
                <LineChart></LineChart>
            </div>
        )
    }
}

export default Home
