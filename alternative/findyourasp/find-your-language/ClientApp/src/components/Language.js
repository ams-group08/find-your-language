import React, { Component } from 'react';
import {Card } from 'reactstrap';

export class Language extends Component {
  render() {
    return <div>
        <Card body className='border'>{this.props.index+1}. {this.props.name}</Card>
    </div>;
  }
}

export default Language;
