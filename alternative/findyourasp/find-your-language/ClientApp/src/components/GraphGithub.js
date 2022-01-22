import React, { Component } from 'react';
import LineChart from './LineChart';
import SeeOurDocument from './SeeOurDocument';
import Sources from './Sources';
import GraphTitle from './GraphTitle';
export class GraphGithub extends Component {
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
                    <GraphTitle sourcename="Github" ></GraphTitle>
                    <br></br>
                    <p className='text' >GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.</p>
                    <p className='text'>Professional and hobby developers use Github as a repository for their code. By looking at how the languages of interest are used in public projects it should be possible to provide a measure of how popular these languages are in real-world applications.</p>
                    <SeeOurDocument link="https://github.com/ams-group08/find-your-language/blob/main/documentation/GITHUB.md"></SeeOurDocument>
                    <br></br>
                    <LineChart call="trends/github" source="Github" vaxistitle="Percentage" ></LineChart>
                </div>
                <br />
                <div className="col-2">
                    <Sources exception="github" width="100%" ></Sources>
                </div>
            </div>
        </div>
    }
}

export default GraphGithub;
