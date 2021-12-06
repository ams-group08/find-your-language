import React, { Component } from 'react'
import { Link  } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link  class="navbar-brand" to="/">Language Popularity</Link >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link  class="nav-link" aria-current="page" to="/">Home</Link >
                            </li>
                            <li class="nav-item">
                                <Link  class="nav-link" to="/AboutUs">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        )
    }
}

export default NavBar
