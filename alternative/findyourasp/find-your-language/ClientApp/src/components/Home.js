import React, { Component } from 'react';
import LineChart from './LineChart'
import PieChart from './PieChart'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <LineChart></LineChart>
            <PieChart></PieChart>
      </div>
    );
  }
}
