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
            <p className='text' >Reddit is an American social discussion website where users can talk about virtually everything.Reddit has discussion groups known as “subreddits” pertaining to various topics. It is here where users can post about the topic and engage in discussion. </p>
            <p className='text' >Since Reddit has been growing in popularity over the past few years getting data from reddit seemed to be a good website. Hence data was extracted from 12 different subreddits concerning the 10 coding languages. The chosen 10 were the subreddits for each of the languages and 2 others. The two others are “r/programming” and “r/coding”. These are broad subreddits, and it is logical to think that there will be a multitude of posts for every single coding language out there.</p>
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
