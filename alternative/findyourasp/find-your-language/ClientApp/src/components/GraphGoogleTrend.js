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
    componentDidMount() {
        this.scrollToTop()
    }
    render() {
        return <div>
            <div className="row justify-content-left">
                <div className="col-10">
                    <GraphTitle sourcename="Google Trends" ></GraphTitle>
                    <br></br>
                    <p className='text' >Google launched Google Insights for Search, a more sophisticated and advanced service displaying search trends data. On September 27, 2012, Google merged Google Insights for Search into Google Trends.
                        Google Trends is a useful search trend feature that shows how frequently a given search term is entered into Google’s search engine relative to the site’s total search volume over a given period of time. So, in other words, it analyzes the popularity of top search queries across various regions and languages.  The website uses graphs to compare the search volume of different queries over time.</p>
                    <p className='text' >Google Trends can be used for comparative keyword research and to discover event-triggered spikes in keyword search volume.
                        You can explore Google Trends from the top down by visiting the tool and seeing what searches are currently trending, then digging into a topic for more information.
                        You can also enter a search term into the search box at the top of the tool to see how search volume has varied for that term over time and in different locations. You change the location, time frame, category or industry, and type of search (web, news, shopping, or YouTube) for more fine-grained data.</p>
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
