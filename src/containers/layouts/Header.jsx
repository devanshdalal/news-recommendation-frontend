import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import getImage from "utils/images";
import { itemsFilterChange, resetStore } from "redux/actions/getItem";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""}
  }

  adocSearch = () => {
    this.props.dispatch(itemsFilterChange({search: this.state.query, skip: 0}))
    this.props.dispatch(resetStore())
    this.props.history.push(`/search`);
  }

  resetHome = () => {
    this.props.dispatch(resetStore({}));
  }

  reacordQuery = (query) => {
    this.setState({query})
  }

  handleEnter = (event) => {
    // console.log('ev', event.key)
    if (event.key === 'Enter') {
      this.adocSearch()
    }
  }

  render() {
    // console.log('this', this.props.location)
    const isLoggedIn = localStorage.getItem("user");
    return (
      <Navbar bg="dark" expand="md">
        <Navbar.Brand href="/#home" onClick={() => this.resetHome()}>
          <img
            src={getImage("logo")}
            alt="logo"
            width="35" height="35"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center search-bar">
          <InputGroup className="search-bar-content">
            <Input value={this.state.query} onChange={(e) => this.reacordQuery(e.target.value)} onKeyPress={this.handleEnter}/>
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={this.adocSearch} >Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Nav>
        {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Recommendation
                </DropdownItem>
                <DropdownItem>
                  Liked
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log out
                </DropdownItem>
              </DropdownMenu>
        </UncontrolledDropdown> */}
        { isLoggedIn?
        <NavDropdown title="Me" alignRight>
            <NavDropdown.Item href="#recommendations">Recommendation</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#liked">Liked</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#login">Log out</NavDropdown.Item>
        </NavDropdown>:
        <NavDropdown title="Me" alignRight>
            <NavDropdown.Item href="/#login">Log in</NavDropdown.Item>
        </NavDropdown>
        }
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
};
const mapStateToProps = state => {
  return {
    filters: state.itemsReducer.filters
  };
};

const HeaderWithRouter = withRouter(props => <Header {...props} />);
export default connect(mapStateToProps)(HeaderWithRouter);
