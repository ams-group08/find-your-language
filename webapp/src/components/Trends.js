import React, { Component } from 'react'
import GoogleTrends from "./GoogleTrends";

export class Trends extends Component {
    render() {
        return (
            <div>
                <GoogleTrends
                    type="TIMESERIES"
                    keyword="C#"
                    url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
                />
                <GoogleTrends
                    type="GEO_MAP"
                    keyword="C#"
                    url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
                />
            </div>
        )
    }
}

export default Trends
