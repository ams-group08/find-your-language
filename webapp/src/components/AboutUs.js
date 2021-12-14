import React, { Component } from 'react'
import Contributors from './Contributors'

export class AboutUs extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <br />
                    <h1 className="display-5 text-danger p-1 m-2  d-flex justify-content-center" >Project Purpose </h1>
                    <br />
                    <div className="card border-dark p-4 m-2">
                        <div className="card-body">
                        <h6>Summary</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h6>How Data was collected</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <br />
                    <p></p>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                    <h1 className="display-6 text-danger m-3 p-2 d-flex justify-content-center" >Contributors</h1>
                    <br />
                    <Contributors title="Fullstack" name="Ehab Omar"></Contributors>
                    <Contributors title="Data Science" name="Cande Funes" ></Contributors>
                    <Contributors title="Data Science" name="Nadine Grant" ></Contributors>
                    <Contributors title="Data Science" name="Srikar Narayan" ></Contributors>
                    <Contributors title="UX/UI" name="Candace Staats" ></Contributors>
                </div>
            </div>

        )
    }
}

export default AboutUs
