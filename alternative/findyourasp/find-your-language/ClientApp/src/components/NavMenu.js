import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import DarkModeToggleButton from './DarkModeToggleButton';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng border-bottom box-shadow mb-3">
          <Container>
            <NavbarBrand tag={Link} to="/">find your language</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2">#</NavbarToggler>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <DarkModeToggleButton></DarkModeToggleButton>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text" to="/trends">Trends</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text" to="/aboutus">About Us</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
