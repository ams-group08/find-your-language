import React, { Component } from 'react'
import Contributers from './Contributers'

export class AboutUs extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col">
                    <br />
                    <h1 className="display-5 text-danger" >Project Purpose </h1>
                    <div className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <br />
                    <p></p>
                </div>
                <div className="col">
                    <br />
                    <h1 className="display-6  text-danger" >Contributers </h1>
                    <Contributers title="Fullstack" name="Ehab Omar" ></Contributers>
                    <Contributers title="Data Science" name="Cande Funes" ></Contributers>
                    <Contributers title="Data Science" name="Nadine Grant" ></Contributers>
                    <Contributers title="Data Science" name="Srikar Narayan" ></Contributers>
                    <Contributers title="UX/UI" name="Candace Staats" ></Contributers>
                </div>
            </div>

        )
    }
}

export default AboutUs
