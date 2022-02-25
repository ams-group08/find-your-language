import React, { Component } from 'react';
import LineChart from './LineChart';

export class Graphs extends Component {
    render() {
        return <div>

            <LineChart call="trends/googledata" source="Google Trends" vaxistitle="Popularity Percentage"></LineChart>
            <LineChart call="trends/stackoverflow" source="Stackoverflow" vaxistitle="Popularity Percentage"></LineChart>
            <LineChart call="trends/github" source="Github" vaxistitle="Popularity Percentage"></LineChart>
            <LineChart call="trends/reddit" source="Reddit" vaxistitle="Popularity Percentage"></LineChart>
        </div>;
    }
}

export default Graphs;
