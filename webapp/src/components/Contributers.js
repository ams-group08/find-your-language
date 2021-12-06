import React, { Component } from 'react'

export class Contributers extends Component {

    render() {
        return (
            <div className="card w-75 p-1 m-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Contributers
