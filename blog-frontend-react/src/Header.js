import React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Blog</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink eventkey={1} href="/blogs">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventkey={2} href="/authors">Authors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventkey={3} href="/keywords">Keywords</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
