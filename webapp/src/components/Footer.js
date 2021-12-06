import React, { Component } from 'react'
import image from '../resources/GitHubLogo.png'

export class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="footer fixed-bottom mt-auto py-3 bg-light">
                    <div className="d-flex justify-content-between">
                        <div className="container">
                            <h5 className="h4 text-danger">Languages Popularity</h5>
                            <h6 className="lead">TechLabs Amsterdam 2021</h6>
                        </div>
                        <div className="container">
                            <a href="https://github.com/ams-group08/find-your-language">
                                <img alt="github logo" src={image}></img>
                            </a>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
