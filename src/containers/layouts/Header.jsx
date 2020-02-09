import React from "react";
import {
  // FaSearch,
  FaUserCircle
} from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, NavDropdown, Form } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import getImage from "utils/images";
// import { getItems, itemsFilterChange, clearItems } from "redux/actions/getItem";
import { logout } from "redux/actions/user";
import { getItems, clearItems, itemsFilterChange, resetStore } from "redux/actions/getItem";
import { SourceType } from "redux/constants/ActionTypes";
// import { Component } from "../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react";
// @ts-ignore
// import colors from "assets/css/colors.scss";

// const { theme } = colors;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""}
  }

  adocSearch = () => {
    // this.props.dispatch(itemsFilterChange({search: this.state.query, skip: 0}))
    // this.props.dispatch(clearItems())
    // this.props.dispatch(getItems(SourceType.NEWSAPI_SEARCH))
    this.props.dispatch(resetStore({source: SourceType.NEWSAPI_SEARCH}))
    this.props.dispatch(itemsFilterChange({search: this.state.query, skip: 0}))
  }

  resetHome = () => {
    this.props.dispatch(resetStore({}));
  }

  reacordQuery = (query) => {
    this.setState({query})
  }
  render() {
    return (
      <Navbar bg="dark" expand="md">
        <Navbar.Brand href="/#home" onClick={() => console.log('home--')}>
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
            <Input onChange={(event) => this.reacordQuery(event.target.value)}/>
            <InputGroupAddon addonType="append">
              <Button onClick={() => this.adocSearch()} color="secondary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Nav>
        <NavDropdown title="Me" alignRight>
            <NavDropdown.Item href="#recommendation">Recommendation</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#recommendation">Preferences</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#login">Log out</NavDropdown.Item>
        </NavDropdown>
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
