import React, { Component } from 'react';
import LineChart from './LineChart';

export class Graphs extends Component {
    render() {
        return <div>

            <LineChart call="trends/googledata" source="Google Trends" vaxistitle="Popularity"></LineChart>
            <LineChart call="trends/stackoverflow" source="Stackoverflow" vaxistitle="Popularity"></LineChart>
            <LineChart call="trends/github" source="Github" vaxistitle="Percentage"></LineChart>
            <LineChart call="trends/reddit" source="Reddit" vaxistitle="Popularity"></LineChart>
        </div>;
    }
}

export default Graphs;
