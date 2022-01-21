import React, { Component } from 'react';
import "./Source.css"
import { Link } from 'react-router-dom';
import { Button, NavLink } from 'reactstrap';


export class Source extends Component {
    render() {
        return <div>
            <div className="post card m-4 p-2 border shadow" style={{ width: this.props.width }}>
                <NavLink href={this.props.linktopage}>
                <img src={this.props.imagesource} className="card-img-top" alt={this.props.sourcedescription}/>
                </NavLink>
                <div className="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p className="card-text">See graphs and data collected from <em>{this.props.title}</em></p>
                    <Button className='btn btn-primary' tag={Link}  to={"/graph/" + this.props.title}>See collected data</Button>{' '}
                </div>
            </div>
        </div>;
    }
}
export default Source;
