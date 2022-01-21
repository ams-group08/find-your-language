import React, { Component } from 'react';

export class SeeOurDocument extends Component {
  render() {
    return <div>
            <br></br>
            <p className='text'>To see the details of the data collection methods, see our  <a href={this.props.link} class="link-info">readme page</a></p>
            
    </div>;
  }
}

export default SeeOurDocument;
