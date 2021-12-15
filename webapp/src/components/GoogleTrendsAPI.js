import React, { Component } from 'react'


export class GoogleTrendsAPI extends Component {

    getResults = () => {
        console.log("Click")
        const googleTrends = require('google-trends-api');
        googleTrends.interestOverTime({ keyword: ['Women\'s march', 'Trump Inauguration'] })
            .then(function (results) {
                console.log('These results are awesome', results);
            })
            .catch(function (err) {
                console.error('Oh no there was an error', err);
            });
    }

    render() {
        return (
            <div>
                <button  onClick={this.getResults} >Get results</button>
            </div>
        )
    }
}

export default GoogleTrendsAPI
