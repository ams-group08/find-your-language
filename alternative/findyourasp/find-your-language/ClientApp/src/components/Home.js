import React, { Component } from 'react';
import LineChart from './LineChart'
import PieChart from './PieChart'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <LineChart call = "trends/stackoverflow" source = "Stackoverflow"></LineChart>
            <LineChart call = "trends/googledata" source = "Google Trends"></LineChart>
            <PieChart></PieChart>
      </div>
    );
  }
}
