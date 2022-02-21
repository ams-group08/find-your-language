import React, { Component } from 'react';
import LineChart from './LineChart';
import Sources from './Sources';
import GraphTitle from './GraphTitle';
export class GraphReddit extends Component {

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
          <GraphTitle sourcename="Reddit" ></GraphTitle>
            <br></br>
            <p className='text' >We collected data from reddit using their API and we filtered this data and came to the conclusion below.</p>
            <br></br>
            <LineChart call="trends/reddit" source="Reddit" vaxistitle="Popularity"></LineChart>
            <br></br>
            </div>
            <br />
          <div className="col-2">
            <Sources exception="reddit" width="100%" ></Sources>
          </div>
        </div>








        </div>;
    }
}

export default GraphReddit;
