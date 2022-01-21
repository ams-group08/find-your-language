import React, { Component } from 'react';

export class GraphTitle extends Component {
    render() {
        return <div>
            <p className='h3'>What did we collect from <span className="badge">{this.props.sourcename}</span></p>
        </div>;
    }
}

export default GraphTitle;
