import React, { Component } from "react";

import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
import Dropdown from 'rsuite/Dropdown';

// const handleOpen = () => {};
// const onSelect = () => {};

export default function Header(props) {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        React + laravel basic crud
      </Navbar.Brand>
      <Nav onSelect={props.onSelect}>
        <Nav.Item  eventKey="user">Users</Nav.Item>
        <Nav.Item eventKey="company" >Companies</Nav.Item>
        <Nav.Item eventKey="address" >Addresses</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item onClick={props.handleOpen}>
          new 
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
