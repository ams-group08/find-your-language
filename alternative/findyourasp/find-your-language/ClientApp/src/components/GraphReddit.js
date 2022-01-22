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
            <p className='text' >The way we collected the data is .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br></br>
            <LineChart call="trends/stackoverflow" source="Reddit" vaxistitle="Popularity"></LineChart>
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
