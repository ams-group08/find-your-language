import React, { Component } from 'react';
import LineChart from './LineChart';
import Sources from './Sources';
import GraphTitle from './GraphTitle';
export class GraphGoogleTrend extends Component {
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    componentDidMount(){
      this.scrollToTop()
    }
    render() {
        return <div>
            <div className="row justify-content-left">
                <div className="col-10">
                    <GraphTitle sourcename="Google Trends" ></GraphTitle>
                    <br></br>
                    <p className='text' >We used the data provided by google trends which represents the search trends along the past years over the search engine, then we we came to this conclusion.</p>
                    <br></br>
                    <LineChart call="trends/googledata" source="Google Trends" vaxistitle="Popularity"></LineChart>
                    <br></br>
                </div>
                <br />
                <div className="col-2">
                    <Sources exception="googletrends" width="100%" ></Sources>
                </div>
            </div>
        </div>
    }
}

export default GraphGoogleTrend;
