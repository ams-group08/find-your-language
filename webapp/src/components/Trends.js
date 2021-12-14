import React, { Component } from 'react'
import GoogleTrends from "./GoogleTrends";

export class Trends extends Component {

    render() {
        return (
            <div>
                <div id="widget">
                    <p>Trends</p>
                    <GoogleTrends
                        type="TIMESERIES"
                        keyword="C#"
                        url="https://ssl.gstatic.com/trends_nrtr/2790_RC04/embed_loader.js"
                    />
                    <GoogleTrends
                        type="GEO_MAP"
                        keyword="C++"
                        url="https://ssl.gstatic.com/trends_nrtr/2790_RC04/embed_loader.js"
                    />


                </div>
            </div>
        )
    }
}



export default Trends
