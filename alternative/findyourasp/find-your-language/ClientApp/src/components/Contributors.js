import React, { Component } from 'react'

export class Contributors extends Component {
    render() {
        
        return (
            <div className="card p-1 mb-3 border shadow rounded">
                <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center">{this.props.title}</h5>
                    <p className="card-text d-flex justify-content-center">{this.props.name}</p>
                </div>
            </div>
           
        )
    }
}

export default Contributors
