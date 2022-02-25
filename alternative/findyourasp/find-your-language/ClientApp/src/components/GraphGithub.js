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
    componentDidMount() {
        this.scrollToTop()
    }
    render() {
        return <div>
            <div className="row justify-content-left">
                <div className="col-10">
                    <GraphTitle sourcename="Github" ></GraphTitle>
                    <br></br>
                    <p className='text' >GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.
                        Professional and hobby developers use Github as a repository for their code. By looking at how the languages of interest are used in public projects it should be possible to provide a measure of how popular these languages are in real-world applications.</p>
                    <p className='text'>Each repository has a coding language associated with it - this is the predominant language used in the files that are managed in GitHub. GitHub generates this information. This makes GitHub an ideal source of per-language metrics. There are several options for metrics to examine. Each repository has the following feature: stars, watchers, forks - described below. Any one of these can be used to interpret how often a repository is being used/implemented/looked at.</p>
                    <ul>
                        <li className='text'>Stars: Starring makes it easy to find a repository or topic again later. Generally a developer will star repositories and topics to keep track of projects they find interesting.Many of GitHub's repository rankings depend on the number of stars a repository has.</li>
                        <li className='text'>Watch: When a developer chooses to watch a project, they will be notified whenever there are any updates. This is different from the "star" system which does not provide notifications. Again, this is a good metric of how often other users are taking an interest or using a repo frequently enough that they require updates on any changes.</li>
                        <li className='text'>Fork: A fork is a copy of a repository. Forking a repository allows a developer to freely experiment with changes without affecting the original project. Again, this is an excellent indication of how frequently the code base and thus language is being actively used by developers.</li>
                    </ul>
                    <SeeOurDocument link="https://github.com/ams-group08/find-your-language/blob/main/documentation/GITHUB.md"></SeeOurDocument>
                    <br></br>
                    <LineChart call="trends/github" source="Github" vaxistitle="Popularity Percentage" ></LineChart>
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
