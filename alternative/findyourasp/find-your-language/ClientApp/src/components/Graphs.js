import React, { Component } from 'react';
import LineChart from './LineChart';

export class Graphs extends Component {
    render() {
        return <div>

            <LineChart call="trends/googledata" source="Google Trends"></LineChart>
            <LineChart call="trends/googledata" source="Google Trends"></LineChart>
            <LineChart call="trends/stackoverflow" source="Github"></LineChart>
            <LineChart call="trends/stackoverflow" source="Reddit"></LineChart>
            <LineChart call="trends/stackoverflow" source="Stackoverflow"></LineChart>
        </div>;
    }
}

export default Graphs;
